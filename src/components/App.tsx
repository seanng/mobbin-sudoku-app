'use client';

import { Toaster } from 'react-hot-toast';

import { AppProvider } from '@/providers/AppProvider';
import type { Puzzle } from '@/types/data';

interface AppProps {
  data: { puzzles: Puzzle[] };
}

const App = ({ data }: AppProps) => {
  return (
    <AppProvider data={data}>
      <div className="flex h-screen w-screen flex-col md:flex-row"></div>
      <Toaster toastOptions={{ className: 'font-mono' }} position="top-right" />
      <canvas
        id="confetti-canvas"
        className="pointer-events-none fixed top-0 left-0 z-30 h-full w-full"
      />
    </AppProvider>
  );
};

export { App };
