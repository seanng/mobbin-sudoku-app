import type { Grid } from '@/types/data';

export const stringToSudokuGrid = (input: string) => {
  const gridSize = 9;

  return Array.from({ length: gridSize }, (_, row) =>
    Array.from({ length: gridSize }, (__, col): number => {
      const index = row * gridSize + col;
      return input[index] === '.' ? 0 : parseInt(input[index] as string, 10);
    })
  );
};

const isSafe = (grid: Grid, row: number, col: number, num: number): boolean => {
  const n = grid.length;

  // Check if the number is in the same row or column
  for (let i = 0; i < n; i += 1) {
    if (grid[row]?.[i] === num || grid[i]?.[col] === num) {
      return false;
    }
  }

  // Check if the number is in the same 3x3 subgrid
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (grid[i + startRow]?.[j + startCol] === num) {
        return false;
      }
    }
  }

  return true;
};

export const checkSolution = (initialGrid: Grid, solution: Grid) => {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      // Do not check (and throw errors) for cells in initial grid.
      if (initialGrid[i]?.[j] === 0) {
        const cell = solution[i]?.[j] as number;
        if (cell > 9 || cell < 0)
          throw new Error('Grid contains invalid value');
        if (cell === 0) throw new Error('Grid is not complete');
        if (!isSafe(solution, i, j, cell))
          throw new Error(`Cell on Row ${i} Column ${j} is not valid`);
      }
    }
  }
};
