import { App } from '@/components/App';
import type { Puzzle } from '@/types/data';

const getPuzzles = async (): Promise<Puzzle[]> => {
  return [{}];
};

const Page = async () => {
  const puzzles = await getPuzzles();

  return <App data={{ puzzles }} />;
};

export default Page;
