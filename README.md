# Changers Website

A standalone website for Changers, separate from AdaptBuddy.

## Stack

- React + TypeScript
- Vite
- Plain CSS
- lucide-react icons
- Supabase-ready for future database/auth work

## Run

`npm install`
`npm run dev`

## Supabase

Project URL:

`https://yybohmmisxrfshmcvjvx.supabase.co`

1. Copy `.env.example` to `.env.local`.
2. Add the project publishable/anon key as `VITE_SUPABASE_ANON_KEY`.
3. Run `supabase/schema.sql` in the Supabase SQL Editor.
4. Restart the dev server.

The join form writes to the private `leads` table when Supabase environment variables are configured. Public visitors can submit the form, but cannot read submitted leads.

Detailed setup and security notes are in `supabase/README.md`.

Never use a Supabase `service_role` key in the frontend or in Vercel client-side environment variables.
