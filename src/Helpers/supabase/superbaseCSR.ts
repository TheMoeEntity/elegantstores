"use client";
import { createBrowserClient } from "@supabase/ssr";

export const createSupabaseServerClientCSR = async () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return supabase;
};
