import axios from 'axios';
import swal from 'sweetalert';
import { Profiles, ProfilesInput } from '../types/requests';

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
  getProfiles: async (): Promise<Profiles[] | undefined> => {
    try {
      const profiles = await axios.get('/profile', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return profiles.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  deleteProfile: async (profileId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete('/profile/delete/' + profileId, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        'Erro ao deletar perfil',
        'Ocorreu um erro ao deletar, por favor tente novamente mais tarde!',
      );
    }
  },
  creatProfile: async (
    profile: ProfilesInput,
  ): Promise<Profiles | undefined> => {
    try {
      const newTeam = await axios.post('/profile/create', profile, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o perfil', err.response.data.message[0]);
    }
  },
  getProfileById: async (profileId: string): Promise<Profiles | undefined> => {
    try {
      const teams = await axios.get('/profile/find/' + profileId, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return teams.data;
    } catch (err) {
      handleError(
        'Perfil não encontrado',
        'Nenhum perfil com esse id foi encontrado no servidor',
      );
    }
  },
  updateProfile: async (profile: Profiles): Promise<Profiles | undefined> => {
    try {
      const updatedProfile = await axios.patch('/profile/update', profile, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return updatedProfile.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o perfil', err.response.data.message[0]);
    }
  },
};
