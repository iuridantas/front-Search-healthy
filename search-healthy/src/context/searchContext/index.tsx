import { createContext, useState } from 'react';

const DEFAULT_VALUE = {
  search: '',
};

const SearchContext = createContext<any>(DEFAULT_VALUE);

const SearchContextProvider: React.FC = ({ children }:any) => {
  const [search, setSearch] = useState(DEFAULT_VALUE.search);
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider };
export default SearchContext;
