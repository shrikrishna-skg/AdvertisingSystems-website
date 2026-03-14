# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Book a Demo & Google Calendar

The `/book-demo` page submits to `POST /api/book-demo`, which can create an event on Google Calendar when configured.

1. Copy `.env.example` to `.env` and set:
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — from [Google Cloud Console](https://console.cloud.google.com/apis/credentials) (OAuth 2.0).
   - `GOOGLE_REFRESH_TOKEN` — run an OAuth flow once with `access_type=offline` and `prompt=consent` for the calendar owner (e.g. shrikrishna@multisystems.ai) and save the refresh token.
   - `GOOGLE_CALENDAR_ID` — optional; default `primary`.
2. Enable the Google Calendar API for your project in Google Cloud Console.
3. Never commit `.env` or expose the client secret to the client (the API runs only on the server).

If Calendar env vars are missing, the form still succeeds; we just don’t create a calendar event.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
