import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/supabase';

export function useSupabase<T extends keyof Database['public']['Tables']>(
  table: T,
  query?: string
) {
  const [data, setData] = useState<Database['public']['Tables'][T]['Row'][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let queryBuilder = supabase.from(table).select('*');
        
        if (query) {
          queryBuilder = queryBuilder.ilike('name', `%${query}%`);
        }

        const { data, error } = await queryBuilder;
        
        if (error) throw error;
        setData(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table, query]);

  return { data, loading, error };
}
