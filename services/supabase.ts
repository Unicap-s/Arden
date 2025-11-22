
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Extracted from your connection string: db.toxovyipjjhjhomtgzny.supabase.co
const SUPABASE_URL = 'https://toxovyipjjhjhomtgzny.supabase.co';

// IMPORTANT: The PostgreSQL connection string you provided cannot be used in the browser for security reasons.
// 1. Go to your Supabase Dashboard (https://supabase.com/dashboard/project/toxovyipjjhjhomtgzny)
// 2. Click on "Project Settings" (Cog icon) -> "API"
// 3. Copy the "anon" (public) key and paste it inside the quotes below.
const SUPABASE_KEY = 'PASTE_YOUR_ANON_PUBLIC_KEY_HERE';

let supabaseInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient | null => {
  if (supabaseInstance) return supabaseInstance;

  if (!SUPABASE_KEY || SUPABASE_KEY === 'PASTE_YOUR_ANON_PUBLIC_KEY_HERE') {
    console.warn("Supabase Anon Key is missing in services/supabase.ts");
    return null;
  }

  try {
    supabaseInstance = createClient(SUPABASE_URL, SUPABASE_KEY);
    return supabaseInstance;
  } catch (e) {
    console.error("Error initializing Supabase client", e);
    return null;
  }
};

export interface PlayerStats {
  player_name: string;
  damage: number;
  kills: number;
  deaths: number;
}

export const submitPlayerStats = async (stats: PlayerStats): Promise<{ success: boolean; message?: string }> => {
  const supabase = getSupabase();
  if (!supabase) return { success: false, message: "Database not configured (Missing API Key)" };
  if (!stats.player_name || stats.player_name === "Unknown") return { success: false, message: "Invalid player name" };

  try {
    const { data: existingData, error: fetchError } = await supabase
      .from('leaderboard')
      .select('*')
      .eq('player_name', stats.player_name)
      .maybeSingle();

    if (fetchError) {
       console.error("Fetch error:", fetchError.message);
       return { success: false, message: fetchError.message };
    }

    let shouldUpdate = false;
    // Schema: id, player_name, damage, kills, deaths
    let newRecord = { 
        player_name: stats.player_name, 
        damage: stats.damage, 
        kills: stats.kills, 
        deaths: stats.deaths 
    };

    if (!existingData) {
        shouldUpdate = true;
    } else {
        // Only update if new damage is higher (Personal Best)
        if (stats.damage > existingData.damage) {
            shouldUpdate = true;
        } else {
            return { success: true, message: "Score lower than personal best, not updated." };
        }
    }

    if (shouldUpdate) {
        const { error: upsertError } = await supabase
            .from('leaderboard')
            .upsert(newRecord, { onConflict: 'player_name' });
        
        if (upsertError) throw upsertError;
        return { success: true, message: "Leaderboard updated successfully" };
    }

    return { success: true, message: "No changes needed" };

  } catch (error: any) {
    console.error("Supabase Error:", error.message || error);
    return { success: false, message: error.message || "Unknown error" };
  }
};

export const fetchGlobalLeaderboard = async (orderByField: 'damage' | 'kills' | 'deaths' = 'damage') => {
    const supabase = getSupabase();
    if (!supabase) return [];

    const { data, error } = await supabase
        .from('leaderboard')
        .select('*')
        .order(orderByField, { ascending: false })
        .limit(50);

    if (error) {
        console.error("Error fetching leaderboard:", error.message);
        return [];
    }
    return data || [];
};
