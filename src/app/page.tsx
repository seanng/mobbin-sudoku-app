import { App } from '@/components/App';
import { supabase } from '@/lib/supabase';
import type { Puzzle } from '@/types/data';

const getPuzzles = async (): Promise<Puzzle[]> => {
  const { data } = await supabase.from('sudoku_puzzles').select();
  return data as Puzzle[];
};

const Page = async () => {
  const puzzles = await getPuzzles();

  return <App data={{ puzzles }} />;
};

export default Page;
