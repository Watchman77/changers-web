# Changers Supabase Setup

Project URL:

`https://yybohmmisxrfshmcvjvx.supabase.co`

## 1. Run the schema

1. Open the Supabase project dashboard.
2. Go to **SQL Editor**.
3. Paste the full contents of `supabase/schema.sql`.
4. Click **Run**.

The schema is idempotent, so it can be run again after future updates.

## 2. Add frontend environment variables

For local development, create `.env.local`:

```bash
VITE_SUPABASE_URL=https://yybohmmisxrfshmcvjvx.supabase.co
VITE_SUPABASE_ANON_KEY=your_publishable_or_anon_key
```

For Vercel, add the same values in:

**Project Settings -> Environment Variables**

Then redeploy production.

## 3. Security model

- `public.leads`
  - Public website visitors can only insert.
  - Visitors cannot read, update, or delete leads.
  - Consent is required by the insert policy.

- `public.properties`
  - Public visitors can only read rows marked `is_public = true`.
  - Draft, archived, or private rows are hidden from the website.

- `public.audit_notes`
  - No public access.
  - Reserved for internal notes and back-office workflows.

## 4. Key safety

Use only the publishable/anon key in the browser.

Never place a `service_role` key in:

- `.env.local` for the Vite frontend
- Vercel frontend environment variables
- React code
- GitHub
- screenshots, email, or chat

The service-role key bypasses RLS and belongs only in secure server-side code.

## 5. Recommended dashboard checks

After running the SQL:

1. Open **Table Editor -> leads** and confirm the new columns exist.
2. Open **Authentication / API keys** and copy only the publishable/anon key for the frontend.
3. Open **Database -> Policies** and confirm:
   - `leads` has insert-only anon policy.
   - `properties` has public select only for public rows.
   - `audit_notes` has no anon policy.
4. Submit the website join form once.
5. Confirm the new row appears in `leads`.
