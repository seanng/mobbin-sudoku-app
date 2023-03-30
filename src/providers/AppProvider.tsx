import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import type { Puzzle } from '@/types/data';

interface IAppContext {}

interface AppProviderProps {
  children: ReactNode;
  data: { puzzles: Puzzle[] };
}

export const AppContext = createContext<IAppContext>({});

export const AppProvider = ({ children }: AppProviderProps) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppProvider = () => useContext(AppContext);
