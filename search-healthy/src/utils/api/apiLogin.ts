import { LoginResponse, SignIn } from '../types/requests';
import axios from 'axios';
import swal from 'sweetalert';

axios.defaults.baseURL = 'http://localhost:3000/';
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
};