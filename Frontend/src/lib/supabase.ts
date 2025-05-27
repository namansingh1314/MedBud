import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

let supabaseInstance: SupabaseClient | null = null;

export const supabase = (() => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    });
  }
  return supabaseInstance;
})();

export type Profile = {
  id: string;
  username: string;
  avatar_url: string;
  created_at: string;
};

export type PredictionHistory = {
  id: string;
  user_id: string;
  symptoms: string[];
  predicted_disease: string;
  description: string;
  medications: string[];
  diet: string[];
  workout: string[];
  precautions: string[];
  created_at: string;
};
