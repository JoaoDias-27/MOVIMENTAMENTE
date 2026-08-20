create extension if not exists pgcrypto with schema extensions;

drop function if exists public.delete_shared_storage(text, text);
drop function if exists public.set_shared_storage(text, text, text);
drop function if exists public.verify_teacher_password(text);
drop function if exists public.is_allowed_shared_key(text);

drop table if exists public.teacher_auth;
drop table if exists public.app_storage;

create table public.app_storage (
  storage_key text primary key,
  storage_value text not null default '',
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.teacher_auth (
  id integer primary key,
  password_hash text not null,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.app_storage disable row level security;
alter table public.teacher_auth disable row level security;

revoke all on table public.app_storage from anon, authenticated;
revoke all on table public.teacher_auth from anon, authenticated;
grant select on table public.app_storage to anon, authenticated;

create or replace function public.is_allowed_shared_key(p_key text)
returns boolean
language sql
immutable
as $$
  select p_key = any (array[
    'quiz-modules',
    'biblioteca-modules',
    'atividades-modules',
    'videos-modules',
    'week-challenges',
    'page-edits',
    'site-config'
  ]);
$$;

create or replace function public.verify_teacher_password(p_password text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.teacher_auth
    where id = 1
      and password_hash = extensions.crypt(p_password, password_hash)
  );
$$;

create or replace function public.set_shared_storage(
  p_key text,
  p_value text,
  p_password text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_allowed_shared_key(p_key) then
    raise exception 'Shared key not allowed: %', p_key;
  end if;

  if not public.verify_teacher_password(p_password) then
    raise exception 'Invalid teacher password';
  end if;

  insert into public.app_storage (storage_key, storage_value, updated_at)
  values (p_key, coalesce(p_value, ''), timezone('utc', now()))
  on conflict (storage_key) do update
    set storage_value = excluded.storage_value,
        updated_at = timezone('utc', now());
end;
$$;

create or replace function public.delete_shared_storage(
  p_key text,
  p_password text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_allowed_shared_key(p_key) then
    raise exception 'Shared key not allowed: %', p_key;
  end if;

  if not public.verify_teacher_password(p_password) then
    raise exception 'Invalid teacher password';
  end if;

  delete from public.app_storage where storage_key = p_key;
end;
$$;

grant execute on function public.verify_teacher_password(text) to anon, authenticated;
grant execute on function public.set_shared_storage(text, text, text) to anon, authenticated;
grant execute on function public.delete_shared_storage(text, text) to anon, authenticated;

insert into public.teacher_auth (id, password_hash, updated_at)
values (
  1,
  extensions.crypt('movimenta2026', extensions.gen_salt('bf')),
  timezone('utc', now())
);

-- Para trocar a senha do professor depois:
-- update public.teacher_auth
-- set password_hash = extensions.crypt('NOVA_SENHA_AQUI', extensions.gen_salt('bf')),
--     updated_at = timezone('utc', now())
-- where id = 1;
