import {
  createContext,
  ReactComponentElement,
  useEffect,
  useState,
} from 'react';
import { api } from '../../utils/api/apiLogin';
import { User } from '../../utils/types/requests';

interface IPropsUserContext {
  user: User | undefined;
  tokenId: string ;
  setUser: (user: User) => void;
  setTokenId: (token: string ) => void;
}

interface IUserContextProvider {
  children: JSX.Element;
}

const DEFAULT_VALUE = {
  setUser: (user: User) => {},
  setTokenId: (token: string) => {},
  user: {},
  tokenId: '',
};

const UserContext = createContext<IPropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC<IUserContextProvider> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(DEFAULT_VALUE.user);
  const [tokenId, setTokenId] = useState<string>(DEFAULT_VALUE.tokenId);
  const getToken = localStorage.getItem('token');
  useEffect(() => {
    if (getToken || tokenId !== '') {
      api.auth(getToken || tokenId).then((res) => setUser(res));
    }
  }, [tokenId]);
  return (
    <UserContext.Provider value={{ user, setUser, tokenId, setTokenId }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
