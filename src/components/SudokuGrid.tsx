import clsx from 'clsx';

interface Props {
  initialGrid: number[][];
  currentGrid: number[][];
  setCurrentGrid: (newGrid: number[][]) => void;
}

const SudokuGrid = ({ initialGrid, currentGrid, setCurrentGrid }: Props) => {
  const handleChange = (row: number, col: number, value: string) => {
    if (value.length > 1) return;
    const newGrid = [...currentGrid];
    (newGrid[row] as number[])[col] = parseInt(value, 10) || 0;
    setCurrentGrid(newGrid);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-9 gap-1">
        {currentGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isReadOnly =
              (initialGrid[rowIndex] as number[])[colIndex] !== 0;
            return (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="number"
                min="1"
                max="9"
                value={cell === 0 ? '' : cell}
                onChange={(e) =>
                  handleChange(rowIndex, colIndex, e.target.value)
                }
                readOnly={isReadOnly}
                className={clsx(
                  'h-12 w-12 pl-3 text-center font-mono focus:outline-none md:h-20 md:w-20 md:pl-4 md:text-lg',
                  isReadOnly && 'cursor-default bg-slate-400',
                  // Borders to separate 3x3 grids
                  rowIndex % 3 === 0 &&
                    rowIndex !== 0 &&
                    'border-t-2 border-black',
                  colIndex % 3 === 0 &&
                    colIndex !== 0 &&
                    'border-l-2 border-black'
                )}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export { SudokuGrid };
