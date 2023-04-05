'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { SudokuGrid } from '@/components/SudokuGrid';
import { animateConfetti } from '@/lib/confetti';
import { checkSolution } from '@/utils/helpers';

interface AppProps {
  puzzle: string;
  solution: string;
}

const App = ({ puzzle, solution }: AppProps) => {
  const [grid, setGrid] = useState<string>(puzzle);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  const handleSubmit = () => {
    try {
      setIsChecking(true);
      checkSolution(grid, solution);
      animateConfetti();
      toast.success('Congratulations! You solved the puzzle! 🎉');
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-6 font-sans text-5xl font-semibold text-white">
          Sudoku
        </h1>
        <SudokuGrid initial={puzzle} grid={grid} setGrid={setGrid} />
        <div className="mt-6">
          <button
            className="rounded-sm bg-emerald-400 px-6 py-2 text-center font-mono tracking-wide text-black disabled:bg-emerald-600 disabled:text-gray-600 md:py-3 md:px-9 md:text-lg"
            disabled={isChecking}
            onClick={handleSubmit}
          >
            Check Solution
          </button>
        </div>
      </div>
      <Toaster toastOptions={{ className: 'font-mono' }} position="top-right" />
      <canvas
        id="confetti-canvas"
        className="pointer-events-none fixed top-0 left-0 z-30 h-full w-full"
      />
    </>
  );
};

export { App };
