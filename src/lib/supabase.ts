'server-only';

import { createClient } from '@supabase/supabase-js';

import { accessEnv } from '@/utils/access-env';

export const supabase = createClient(
  accessEnv('SUPABASE_PROJECT_URL'),
  accessEnv('SUPABASE_API_KEY')
);
