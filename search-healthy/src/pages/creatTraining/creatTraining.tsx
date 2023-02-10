import {
    Box,
    Button,
    Flex,
    FormLabel,
    Input,
    Text,
    Stack,
    Textarea,
  } from '@chakra-ui/react';
  import { FormEvent, useContext, useEffect, useState } from 'react';
  import { useLocation, useNavigate, useParams } from 'react-router-dom';
  import UserContext from '../../context/userContext';
  import { api } from '../../utils/api/apiTraining';
  import { Trainings } from '../../utils/types/requests';
  
  export function CreatTraining() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [trainings, setTrainings] = useState<Trainings>();
    const { id } = useParams();
    const location = useLocation()

    useEffect(() => {
      if (location.state.isCreated) return
      getTrainingById();
    }, []);
  
    async function getTrainingById() {
      if (id) {
        const training = await api.getTrainingById(id);
        setTrainings(training);
      }
    }
  
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      
      const newTraining = {
        profileId: id,
        muscularegroup: formData.get('muscularegroup')?.toString() || '',
        exercises: [formData.get('exercises')?.toString() || ''],
        repetition: formData.get('repetition')?.toString() || '',
        aerobic: formData.get('aerobic')?.toString() || '',
        stretching: formData.get('stretching')?.toString() || '',
      };
  
      const creatTraining = await api.creatTraining(newTraining);
        setLoading(false);
  
      if (creatTraining) {
        navigate('/profile');
      }
    }
  
    return (
      <>
        <Flex
          flexDirection="column"
          height="100%"
          justifyContent="center"
          alignItems="center"
          margin="100px"
        >
          <Stack mb="6">
            <Box minW={{ md: '500px' }}>
              <form onSubmit={handleSubmit}>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                  borderRadius={14}
                >
                  <Text
                    borderBottomWidth="1px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                  >
                    Criar novo treino
                  </Text>
                  <Box>
                    <FormLabel>Grupo Muscular:</FormLabel>
                    <Input
                      defaultValue={trainings?.muscularegroup}
                      type="text"
                      name="muscularegroup"
                      isRequired
                      placeholder="Nome"
                    />
                  </Box>
                  <Box>
                    <FormLabel>Exercício:</FormLabel>
                    <Input
                      defaultValue={trainings?.exercises}
                      type="text"
                      name="exercises"
                      isRequired
                      placeholder="Exercicio"
                    />
                  </Box>
                  <Box>
                    <FormLabel>Repetição:</FormLabel>
                    <Input
                      defaultValue={trainings?.repetition}
                      type="text"
                      name="repetition"
                      isRequired
                      placeholder="Repetição"
                    />
                  </Box>
                  <Box>
                    <FormLabel>Aeróbico:</FormLabel>
                    <Input
                      defaultValue={trainings?.aerobic}
                      type="text"
                      name="aerobic"
                      isRequired
                      placeholder="Aeróbico"
                    />
                  </Box>
                  <Box>
                    <FormLabel>Alongamento:</FormLabel>
                    <Input
                      defaultValue={trainings?.stretching}
                      type="text"
                      name="stretching"
                      isRequired
                      placeholder="Alongamento"
                    />
                  </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        borderRadius={20}
                        type="submit"
                        variant="solid"
                        colorScheme="blue"
                        color="black"
                        backgroundColor="rgba(66, 153, 225, 0.6)"
                      >
                        Criar
                      </Button>
                    </Box>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </>
    );
  }