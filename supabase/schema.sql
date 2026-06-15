-- Changers Supabase schema.
-- Run this file in Supabase SQL Editor for project yybohmmisxrfshmcvjvx.
-- Security model:
-- - Website visitors can only insert join-form leads.
-- - Website visitors cannot read, update, or delete leads.
-- - Public property cards are readable only when marked as public.
-- - Admin/back-office access should use Supabase Dashboard, authenticated admin tooling,
--   or server-side service-role code only. Never expose service-role keys in the browser.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  name text,
  email text not null,
  phone text,
  country text not null,
  investor_type text not null,
  investment_interest text,
  investment_budget text,
  message text,
  consent_marketing boolean not null default false,
  consent_at timestamptz,
  source text not null default 'website_join_form',
  page_path text not null default '/join',
  form_version text not null default '2026-06-15',
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint leads_email_format check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  constraint leads_source_check check (source in ('website_join_form')),
  constraint leads_status_check check (status in ('new', 'contacted', 'qualified', 'not_eligible', 'archived')),
  constraint leads_investor_type_check check (
    investor_type in (
      'Individual Investor',
      'Institutional Investor',
      'Property Owner',
      'Developer',
      'Strategic Partner',
      'Other',
      'First-time investor',
      'Young professional',
      'Diaspora investor',
      'Entrepreneur'
    )
  ),
  constraint leads_investment_budget_check check (
    investment_budget is null or investment_budget in (
      'Under £5,000',
      '£5,000 - £25,000',
      '£25,000 - £100,000',
      '£100,000+'
    )
  )
);

alter table public.leads
  add column if not exists full_name text,
  add column if not exists phone text,
  add column if not exists investment_interest text,
  add column if not exists investment_budget text,
  add column if not exists consent_marketing boolean not null default false,
  add column if not exists consent_at timestamptz,
  add column if not exists page_path text not null default '/join',
  add column if not exists form_version text not null default '2026-06-15',
  add column if not exists status text not null default 'new',
  add column if not exists updated_at timestamptz not null default now();

update public.leads
set full_name = coalesce(full_name, name)
where full_name is null and name is not null;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'leads_email_format') then
    alter table public.leads add constraint leads_email_format check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$') not valid;
  end if;

  if not exists (select 1 from pg_constraint where conname = 'leads_source_check') then
    alter table public.leads add constraint leads_source_check check (source in ('website_join_form')) not valid;
  end if;

  if not exists (select 1 from pg_constraint where conname = 'leads_status_check') then
    alter table public.leads add constraint leads_status_check check (status in ('new', 'contacted', 'qualified', 'not_eligible', 'archived')) not valid;
  end if;

  if not exists (select 1 from pg_constraint where conname = 'leads_investor_type_check') then
    alter table public.leads add constraint leads_investor_type_check check (
      investor_type in (
        'Individual Investor',
        'Institutional Investor',
        'Property Owner',
        'Developer',
        'Strategic Partner',
        'Other',
        'First-time investor',
        'Young professional',
        'Diaspora investor',
        'Entrepreneur'
      )
    ) not valid;
  end if;

  if not exists (select 1 from pg_constraint where conname = 'leads_investment_budget_check') then
    alter table public.leads add constraint leads_investment_budget_check check (
      investment_budget is null or investment_budget in (
        'Under £5,000',
        '£5,000 - £25,000',
        '£25,000 - £100,000',
        '£100,000+'
      )
    ) not valid;
  end if;
end;
$$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_leads_updated_at on public.leads;
create trigger set_leads_updated_at
before update on public.leads
for each row
execute function public.set_updated_at();

alter table public.leads enable row level security;
alter table public.leads force row level security;

drop policy if exists "Allow public lead submissions" on public.leads;
drop policy if exists "Allow website lead submissions only" on public.leads;

create policy "Allow website lead submissions only"
on public.leads
for insert
to anon
with check (
  source = 'website_join_form'
  and consent_marketing is true
  and consent_at is not null
  and email is not null
  and country is not null
  and investor_type is not null
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (lower(email));
create index if not exists leads_status_idx on public.leads (status);

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
  is_public boolean not null default false,
  sort_order integer not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint properties_status_check check (status in ('coming_soon', 'under_review', 'research_stage', 'published', 'archived'))
);

alter table public.properties
  add column if not exists is_public boolean not null default false,
  add column if not exists sort_order integer not null default 100,
  add column if not exists updated_at timestamptz not null default now();

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'properties_status_check') then
    alter table public.properties add constraint properties_status_check check (status in ('coming_soon', 'under_review', 'research_stage', 'published', 'archived')) not valid;
  end if;
end;
$$;

drop trigger if exists set_properties_updated_at on public.properties;
create trigger set_properties_updated_at
before update on public.properties
for each row
execute function public.set_updated_at();

alter table public.properties enable row level security;
alter table public.properties force row level security;

drop policy if exists "Allow public property preview reads" on public.properties;
drop policy if exists "Allow public published property reads" on public.properties;

create policy "Allow public published property reads"
on public.properties
for select
to anon
using (is_public is true and status <> 'archived');

create index if not exists properties_public_sort_idx on public.properties (is_public, sort_order, created_at desc);

create table if not exists public.audit_notes (
  id uuid primary key default gen_random_uuid(),
  entity_type text not null,
  entity_id uuid,
  note text not null,
  created_at timestamptz not null default now(),
  constraint audit_notes_entity_type_check check (entity_type in ('lead', 'property', 'general'))
);

alter table public.audit_notes enable row level security;
alter table public.audit_notes force row level security;

-- No anon policies for audit_notes. Keep internal notes private.
