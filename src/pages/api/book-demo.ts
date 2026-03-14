import type { APIRoute } from 'astro';
import { google } from 'googleapis';

/** Create a demo request event on Google Calendar if credentials are configured.
 *  Calendar used is the one owned by the account that issued GOOGLE_REFRESH_TOKEN
 *  (intended: shrikrishna@multisystems.ai). */
async function createCalendarEvent(params: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  numberOfLocations?: string;
  companySize?: string;
  monthlyAdSpend?: string;
  preferredDatetime?: string;
  message?: string;
}): Promise<{ success: boolean; eventId?: string; error?: string }> {
  const clientId = import.meta.env.GOOGLE_CLIENT_ID;
  const clientSecret = import.meta.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = import.meta.env.GOOGLE_REFRESH_TOKEN;
  const calendarId = import.meta.env.GOOGLE_CALENDAR_ID || 'primary';

  if (!clientId || !clientSecret || !refreshToken) {
    return { success: false, error: 'Calendar not configured (missing env)' };
  }

  try {
    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, undefined);
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const title = `Demo request: ${params.company} — ${params.name}`;
    const desc = [
      `Name: ${params.name}`,
      `Email: ${params.email}`,
      params.phone && `Phone: ${params.phone}`,
      `Company: ${params.company}`,
      params.numberOfLocations && `Number of locations: ${params.numberOfLocations}`,
      params.companySize && `Company size: ${params.companySize}`,
      params.monthlyAdSpend && `Monthly ad spend: ${params.monthlyAdSpend}`,
      params.message && `Message: ${params.message}`,
    ].filter(Boolean).join('\n');

    let startDate: Date;
    let endDate: Date;
    if (params.preferredDatetime) {
      startDate = new Date(params.preferredDatetime);
      if (isNaN(startDate.getTime())) {
        startDate = new Date();
        startDate.setDate(startDate.getDate() + 1);
        startDate.setHours(10, 0, 0, 0);
      }
      endDate = new Date(startDate);
      endDate.setMinutes(endDate.getMinutes() + 30);
    } else {
      startDate = new Date();
      startDate.setDate(startDate.getDate() + 1);
      startDate.setHours(10, 0, 0, 0);
      endDate = new Date(startDate);
      endDate.setMinutes(30, 0, 0);
    }

    const event = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: title,
        description: desc,
        start: {
          dateTime: startDate.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        },
        end: {
          dateTime: endDate.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        },
        attendees: [{ email: params.email }],
      },
    });

    return { success: true, eventId: event.data.id ?? undefined };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Calendar API error';
    return { success: false, error: message };
  }
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('content-type')?.includes('application/json') === false) {
    return new Response(
      JSON.stringify({ error: 'Content-Type must be application/json' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() || undefined : undefined;
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const numberOfLocations = typeof body.number_of_locations === 'string' ? body.number_of_locations.trim() || undefined : undefined;
  const companySize = typeof body.company_size === 'string' ? body.company_size.trim() : undefined;
  const monthlyAdSpend = typeof body.monthly_ad_spend === 'string' ? body.monthly_ad_spend.trim() : undefined;
  const preferredDatetime = typeof body.preferred_datetime === 'string' ? body.preferred_datetime.trim() || undefined : undefined;
  const message = typeof body.message === 'string' ? body.message.trim() : undefined;

  if (!name || !email || !company) {
    return new Response(
      JSON.stringify({ error: 'Name, email, and company are required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const calendarResult = await createCalendarEvent({
    name,
    email,
    company,
    phone,
    numberOfLocations,
    companySize,
    monthlyAdSpend,
    preferredDatetime,
    message,
  });

  if (calendarResult.success) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thanks! We've received your request and will confirm your demo time shortly.",
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Calendar failed but we still acknowledge the request (e.g. env not set or API error)
  return new Response(
    JSON.stringify({
      success: true,
      message: "Thanks! We've received your request and will be in touch to schedule your demo.",
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
