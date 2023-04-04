'use client';

import cloneDeep from 'lodash.clonedeep';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import type { Grid } from '@/types/data';
import { checkSolution } from '@/utils/helpers';

import { SudokuGrid } from './SudokuGrid';

interface AppProps {
  puzzle: Grid;
}

const App = ({ puzzle }: AppProps) => {
  const [grid, setGrid] = useState<Grid>(cloneDeep(puzzle));

  const handleCheckSolution = () => {
    try {
      console.log('Checking solution...');
      checkSolution(grid);
      // Throw confetti!
    } catch (e) {
      console.log('error: ', e);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="mb-6 text-4xl font-semibold">Sudoku</h1>
        <SudokuGrid
          initialGrid={puzzle}
          currentGrid={grid}
          setCurrentGrid={setGrid}
        />
        <div className="mt-6">
          <button
            className="rounded-md bg-blue-500 py-2 px-4 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            onClick={handleCheckSolution}
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
