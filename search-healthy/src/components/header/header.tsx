import { Link, useNavigate } from 'react-router-dom';
import { CgGym } from 'react-icons/cg';
import { HeaderButtons, HeaderComponent, HeaderLogo } from './style';

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
          <CgGym size={30} />
          <h1>Search Healthy</h1>
      </HeaderLogo>
      <HeaderButtons>
        <div>
          {localStorage.getItem('token') ? (
            <button
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
              }}
            >
              Sair
            </button>
          ) : (
            <></>
          )}
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}