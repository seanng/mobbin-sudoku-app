import { App } from '@/components/App';
import { supabase } from '@/lib/supabase';
import type { Data, DataItem } from '@/types/data';
import { stringToSudokuGrid } from '@/utils/helpers';

const fallbackPuzzle =
  '52...6.........7.13...........4..8..6......5...........418.........3..2...87.....';

const getData = async (): Promise<Data> => {
  const { data } = await supabase.from('sudoku_puzzles').select();
  return data as Data;
};

const getRandomPuzzleData = (data: Data): string => {
  const randomIdx = Math.floor(Math.random() * data.length);
  return (data[randomIdx] as DataItem)?.puzzle ?? fallbackPuzzle;
};

const Page = async () => {
  const data = await getData();
  const puzzleData = getRandomPuzzleData(data);
  const formattedPuzzle = stringToSudokuGrid(puzzleData);

  return <App puzzle={formattedPuzzle} />;
};

export default Page;
