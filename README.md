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
2. Add the project anon/public key as `VITE_SUPABASE_ANON_KEY`.
3. Run `supabase/schema.sql` in the Supabase SQL Editor.
4. Restart the dev server.

The join form writes to the `leads` table when Supabase environment variables are configured.
