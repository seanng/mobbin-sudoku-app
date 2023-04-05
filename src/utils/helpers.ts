/**
 * Gets the coordinates of a cell from a string representation of a Sudoku puzzle
 * @param {number} index - The index of the puzzle string
 * @returns {[number, number]} - The row index and col index of the cell (base 0)
 */
const getCellCoordinates = (index: number): [number, number] => {
  const row = Math.floor(index / 9);
  const col = index % 9;
  return [row, col];
};

/**
 * Checks whether a given number (num) can be placed in a specific position (index) of the Sudoku puzzle string (input)
 * @param {string} input - The Sudoku puzzle string
 * @param {number} index - The index of the position to check
 * @param {string} num - The number to check
 * @returns {boolean} - Whether the number can be placed in the position
 */
const isValid = (input: string, index: number, num: string): boolean => {
  const [row, col] = getCellCoordinates(index);
  const boxRow = 3 * Math.floor(row / 3);
  const boxCol = 3 * Math.floor(col / 3);

  for (let i = 0; i < 9; i += 1) {
    const rowIndex = 9 * row + i;
    const colIndex = 9 * i + col;
    const boxIndex = 9 * (boxRow + Math.floor(i / 3)) + (boxCol + (i % 3));

    if (
      input[rowIndex] === num ||
      input[colIndex] === num ||
      input[boxIndex] === num
    ) {
      return false;
    }
  }
  return true;
};

/**
 * Solves a Sudoku puzzle string (input) using backtracking
 * @param {string} input - The Sudoku puzzle string
 * @param {number} index - The index of the position to check
 * @returns {string | null} - The solved Sudoku puzzle string or null if no solution exists
 */
export const solve = (input: string, index = 0): string | null => {
  if (index >= input.length) {
    return input;
  }

  if (input[index] !== '.') {
    return solve(input, index + 1);
  }

  for (let num = 1; num <= 9; num += 1) {
    if (isValid(input, index, String(num))) {
      const solution = solve(
        input.slice(0, index) + num + input.slice(index + 1),
        index + 1
      );
      if (solution) return solution;
    }
  }
  return null;
};

/**
 * Checks the grid against the solved puzzle to see if the solution is correct
 * @param {string} grid - The Sudoku puzzle string
 * @param {string} solution - The solved Sudoku puzzle string
 * @throws {Error} - If the grid is not filled out or the solution is incorrect
 * @returns {void}
 */
export const checkSolution = (grid: string, solution: string): void => {
  if (grid.length !== solution.length) {
    throw new Error('The grid and solution must be the same length');
  }

  // Prioritize showing empty cells over incorrect cells
  let currentError = '';

  for (let i = 0; i < grid.length; i += 1) {
    const [row, col] = getCellCoordinates(i);
    if (grid[i] === '.') {
      currentError = `Row ${row + 1} Column ${col + 1} is empty.`;
      break;
    }

    if (grid[i] !== solution[i] && currentError === '') {
      currentError = `Row ${row + 1} Column ${col + 1} is incorrect.`;
    }
  }

  if (currentError) throw new Error(currentError);
};
