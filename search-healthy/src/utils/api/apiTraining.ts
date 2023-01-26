import axios from 'axios';
import swal from 'sweetalert';
import { Profiles, TrainingsInput, Trainings } from '../types/requests';

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
  getTrainings: async (): Promise<Trainings[] | undefined> => {
    try {
      const trainings = await axios.get('/training', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return trainings.data;
    } catch (err: any) {
      handleError(
        'Erro no servidor',
        'Erro no servidor tente novamente em alguns instantes',
      );
    }
  },
  creatTraining: async (
    training: TrainingsInput,
  ): Promise<Trainings | undefined> => {
    try {
      const newTraining = await axios.post('/training/create', training, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return newTraining.data;
    } catch (err: any) {
      console.log(err);
      handleError('Erro ao criar o treino', err.response.data.message[0]);
    }
  },
  getTrainingById: async (
    trainingId: string,
  ): Promise<Trainings | undefined> => {
    try {
      const training = await axios.get('/training/find/' + trainingId, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return training.data;
    } catch (err) {
      handleError(
        'Treino não encontrado',
        'Nenhum treino com esse id foi encontrado no servidor',
      );
    }
  },
  updateTraining: async (
    training: Trainings,
  ): Promise<Trainings | undefined> => {
    try {
      const updatedTraining = await axios.patch('/training/update', training, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      });
      return updatedTraining.data;
    } catch (err: any) {
      handleError('Erro ao atualizar o treino', err.response.data.message[0]);
    }
  },
};
