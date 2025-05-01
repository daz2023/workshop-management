import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export function useSupabaseQuery<T>(
  query: string,
  params?: any[]
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from(query)
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setData(data as T);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}
