import { App } from '@/components/App';
import { supabase } from '@/lib/supabase';
import type { Data, DataItem } from '@/types/data';
import { sudokuSolver } from '@/utils/helpers';

// This is a fallback puzzle in case other puzzles are not solvable or the API is down
const FALLBACK_PUZZLE =
  '52...6.........7.13...........4..8..6......5...........418.........3..2...87.....';

const fetchData = async (): Promise<Data> => {
  try {
    const { data } = await supabase.from('sudoku_puzzles').select();
    return data as Data;
  } catch (error) {
    return [
      {
        puzzle: FALLBACK_PUZZLE,
        id: 'fallback',
        created_at: new Date().toISOString(),
      },
    ];
  }
};

const getRandomPuzzle = (data: Data): string => {
  const randomIdx = Math.floor(Math.random() * data.length);
  return (data[randomIdx] as DataItem)?.puzzle ?? FALLBACK_PUZZLE;
};

const Page = async () => {
  const data = await fetchData();
  let puzzle = getRandomPuzzle(data);
  let solvedPuzzle = sudokuSolver(puzzle);

  // handle the edge case where the puzzle is not solvable
  while (!solvedPuzzle) {
    puzzle = getRandomPuzzle(data);
    solvedPuzzle = sudokuSolver(puzzle);
  }

  return <App puzzle={puzzle} solution={solvedPuzzle} />;
};

export default Page;
