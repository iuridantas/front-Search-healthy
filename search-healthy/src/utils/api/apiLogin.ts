import { LoginResponse, SignIn, User } from '../types/requests';
import axios from 'axios';
import swal from 'sweetalert';

axios.defaults.baseURL = 'https://search-healthy-production.up.railway.app/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('token');

function handleError(text: string, description: string) {
  swal({
    title: text,
    text: description,
    icon: 'warning',
    timer: 5000,
  });
}

export const api = {
  signIn: async (loginData: SignIn): Promise<LoginResponse | undefined> => {
    try {
      const login = await axios.post('/auth/login', loginData);
      localStorage.setItem('token', login.data.token);
      return login.data;
    } catch (err: any) {
      handleError(
        'Email ou senha incorretos tente novamente',
        err.response.data.message[0],
      );
    }
  },
  auth: async (token: string ): Promise<User | undefined> => {
    try {
      const auth = await axios.get('/auth', {
        headers: { Authorization: 'Bearer ' + token },
      });
      return auth.data;
    } catch (err: any) {
      handleError('token incorreto', err.response.data.message[0]);
    }
  },
};
