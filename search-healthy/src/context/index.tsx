
import React from 'react';
import { SearchContextProvider } from './searchContext';

interface GlobalContextType {
  children: any
}

const GlobalContext: React.FC<GlobalContextType> = ({children}) => {
  return (
    <SearchContextProvider>{children}</SearchContextProvider>
  );
};

export default GlobalContext;
