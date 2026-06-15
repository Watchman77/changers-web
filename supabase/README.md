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

- `public.profiles`
  - Authenticated users can read, insert, and update only their own profile.
  - Used by the investor dashboard.

- `public.dashboard_events`
  - Authenticated users can read only their own dashboard events.
  - Reserved for account, verification, document, property, and message events.

## 4. Auth setup

### Email verification

Supabase email login can use Magic Link or OTP. Changers currently uses Magic Link from the browser.

In Supabase:

1. Go to **Authentication -> URL Configuration**.
2. Set **Site URL** to:

   `https://www.changersltd.com`

3. Add redirect URLs:

   `https://www.changersltd.com/dashboard`

   `http://127.0.0.1:5173/dashboard`

4. Go to **Authentication -> Providers -> Email** and keep Email enabled.

When someone registers interest, the site stores the lead and sends a secure email link to `/dashboard`.

### Phone verification

Phone verification requires an SMS provider in Supabase.

In Supabase:

1. Go to **Authentication -> Providers -> Phone**.
2. Enable phone auth.
3. Connect an SMS provider such as Twilio, MessageBird, Vonage, or Textlocal.
4. Configure rate limits and CAPTCHA before public use.

Until SMS is configured, the dashboard shows phone verification as pending.

The dashboard includes a phone-code UI that calls Supabase `updateUser({ phone })` and
`verifyOtp({ type: 'phone_change' })`. It will show a setup error until Phone Auth and an SMS
provider are configured.

## 5. Key safety

Use only the publishable/anon key in the browser.

Never place a `service_role` key in:

- `.env.local` for the Vite frontend
- Vercel frontend environment variables
- React code
- GitHub
- screenshots, email, or chat

The service-role key bypasses RLS and belongs only in secure server-side code.

## 6. Recommended dashboard checks

After running the SQL:

1. Open **Table Editor -> leads** and confirm the new columns exist.
2. Open **Table Editor -> profiles** and confirm the dashboard columns exist.
3. Open **Authentication / API keys** and copy only the publishable/anon key for the frontend.
4. Open **Database -> Policies** and confirm:
   - `leads` has insert-only anon policy.
   - `properties` has public select only for public rows.
   - `audit_notes` has no anon policy.
   - `profiles` has own-user authenticated policies.
   - `dashboard_events` has own-user authenticated read policy.
5. Submit the website join form once.
6. Confirm the new row appears in `leads`.
7. Click the email verification link and confirm `/dashboard` loads.
