import axios from 'axios';
import swal from 'sweetalert';
import { User } from '../types/requests';

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
  getUsers: async (): Promise<User[] | undefined> => {
    try {
      const users = await axios.get('/User', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return users.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  deleteUser: async (userId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/User/delete/' + userId, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar usuario',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  getUserById: async (userId: string): Promise<User | undefined> => {
    try {
      const users = await axios.get('/User/find/' + userId, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return users.data;
    } catch (err) {
      handleError(
        'usuario não encontrado',
        'Nenhum usuario com esse id foi encontrado no servidor',
      );
    }
  },
  updateUser: async (user: User): Promise<User | undefined> => {
    try {
      const updatedUser = await axios.patch('/User/update', user, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return updatedUser.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o usuario', err.response.data.message[0]);
    }
  },
};