# Google Calendar OAuth (Book Demo)

Demo requests from the Book Demo form create events on **shrikrishna@multisystems.ai**’s Google Calendar.

## Setup

1. **Credentials**  
   Your `.env` already has:
   - `GOOGLE_CLIENT_ID` — OAuth client ID (813229226122-...)
   - `GOOGLE_CLIENT_SECRET` — OAuth client secret

2. **Refresh token (one-time)**  
   The API needs a refresh token for **shrikrishna@multisystems.ai** (used for both creating demo events and reading calendar availability):

   ```bash
   node scripts/get-google-refresh-token.js
   ```

   - Open the printed URL in a browser.
   - Sign in with **shrikrishna@multisystems.ai**.
   - After authorizing, you’ll be redirected to `http://localhost?code=...` (the page may show “can’t connect” — that’s fine).
   - Copy the **full URL** from the address bar and paste it into the script.
   - The script will print `GOOGLE_REFRESH_TOKEN=...`; add that line to your `.env`.

3. **Google Cloud Console**  
   For the OAuth client (813229226122-...):
   - **Authorized redirect URIs** must include: `http://localhost`
   - **Google Calendar API** must be enabled for the project.

After `GOOGLE_REFRESH_TOKEN` is set in `.env`, the Book Demo API will create events on that account’s primary calendar.
