interface Props {
  initialGrid: number[][];
  currentGrid: number[][];
  setCurrentGrid: (newGrid: number[][]) => void;
}

const SudokuGrid = ({ initialGrid, currentGrid, setCurrentGrid }: Props) => {
  const handleChange = (row: number, col: number, value: string) => {
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
                className={`
                  h-12 w-12 text-center
                  ${isReadOnly ? 'bg-gray-200' : ''}
                  ${
                    rowIndex % 3 === 0 && rowIndex !== 0
                      ? 'border-t-2 border-black'
                      : ''
                  }
                  ${
                    colIndex % 3 === 0 && colIndex !== 0
                      ? 'border-l-2 border-black'
                      : ''
                  }
                `}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export { SudokuGrid };
