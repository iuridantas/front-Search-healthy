
import React from 'react';
import { SearchContextProvider } from './searchContext';

const GlobalContext: React.FC = ({children}:any) => {
  return (
    <SearchContextProvider>{children}</SearchContextProvider>
  );
};

export default GlobalContext;