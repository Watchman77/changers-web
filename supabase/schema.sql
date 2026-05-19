-- Changers early-stage Supabase schema.
-- Run this in Supabase SQL Editor before enabling live form submissions.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  country text not null,
  investor_type text not null,
  message text,
  source text not null default 'website_join_form',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

-- Allows public website visitors to submit the join form.
-- Do not add public select/update/delete policies for leads.
create policy "Allow public lead submissions"
on public.leads
for insert
to anon
with check (true);

create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  location text not null,
  image_url text,
  status text not null default 'coming_soon',
  target_summary text,
  income_summary text,
  readiness_percent integer not null default 0 check (readiness_percent between 0 and 100),
  risk_note text not null default 'Preview only. Not an offer or invitation to invest.',
  created_at timestamptz not null default now()
);

alter table public.properties enable row level security;

-- Public read access for published/preview property cards only.
create policy "Allow public property preview reads"
on public.properties
for select
to anon
using (true);

