import clsx from 'clsx';

interface Props {
  initial: string;
  grid: string;
  setGrid: React.Dispatch<React.SetStateAction<string>>;
}

const SudokuGrid = ({ initial, grid, setGrid }: Props) => {
  const handleInputChange = (value: string, idx: number) => {
    if (value === '0' || value.length > 1) return;
    setGrid(
      (prev: string) =>
        prev.slice(0, idx) + (value || '.') + prev.slice(idx + 1)
    );
  };

  return (
    <div className="flex items-center justify-center bg-slate-700 p-1">
      <div className="grid grid-cols-9 gap-1">
        {grid.split('').map((value, idx) => {
          const isReadOnly = initial[idx] !== '.';
          return (
            <input
              key={idx}
              type="number"
              min="1"
              max="9"
              value={value === '.' ? '' : value}
              onChange={(e) => handleInputChange(e.target.value, idx)}
              readOnly={isReadOnly}
              className={clsx(
                'h-12 w-12 pl-3 text-center font-mono focus:outline-none md:h-20 md:w-20 md:pl-4 md:text-lg',
                isReadOnly
                  ? 'cursor-default bg-slate-400'
                  : 'font-semibold text-sky-800',
                // Borders to separate 3x3 grids
                Math.floor(idx / 9) % 3 === 0 && 'border-t border-slate-700',
                Math.floor(idx / 9) % 3 === 2 && 'border-b border-slate-700',
                idx % 3 === 0 && 'border-l border-slate-700',
                idx % 3 === 2 && 'border-r border-slate-700'
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export { SudokuGrid };
