-- Atualização do Supabase para o Movimentamente
-- Adiciona as duas áreas de conteúdo compartilhado.
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
    'site-config',
    'especialista-content',
    'biografia-content'
  ]);
$$;
