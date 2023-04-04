'use client';

import cloneDeep from 'lodash.clonedeep';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import type { Grid } from '@/types/data';
import { checkSolution } from '@/utils/helpers';

import { SudokuGrid } from './SudokuGrid';

interface AppProps {
  initialGrid: Grid;
}

const App = ({ initialGrid }: AppProps) => {
  const [grid, setGrid] = useState<Grid>(cloneDeep(initialGrid));

  const handleCheckSolution = () => {
    try {
      console.log('Checking solution...');
      checkSolution(initialGrid, grid);
      // Throw confetti!
    } catch (e) {
      console.log('error: ', e);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-6 font-sans text-5xl font-semibold text-white">
          Sudoku
        </h1>
        <SudokuGrid
          initialGrid={initialGrid}
          currentGrid={grid}
          setCurrentGrid={setGrid}
        />
        <div className="mt-6">
          <button
            className="rounded-sm bg-emerald-400 px-6 py-2 text-center font-mono tracking-wide text-black md:py-3 md:px-9 md:text-lg"
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
