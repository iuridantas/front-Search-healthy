
import React from 'react';
import { SearchContextProvider } from './searchContext';
import { UserContextProvider } from './userContext';

interface GlobalContextType {
  children: any
}

const GlobalContext: React.FC<GlobalContextType> = ({children}) => {
  return (
    <UserContextProvider>
    <SearchContextProvider>{children}</SearchContextProvider>
    </UserContextProvider>
  );
};

export default GlobalContext;
