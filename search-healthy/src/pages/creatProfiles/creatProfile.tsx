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
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../utils/api/apiProfile';
import { Profiles, ProfilesInput } from '../../utils/types/requests';

export function CreatProfile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profiles>();
  const { id } = useParams();

  useEffect(() => {
    getProfileById();
  }, []);

  async function getProfileById() {
    if (id) {
      const profile = await api.getProfileById(id);
      setProfiles(profile);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();

    const newProfile: ProfilesInput = {
      name: event.currentTarget.userName.value,
      image: event.currentTarget.image.value,
      tall: event.currentTarget.tall.value,
      weigth: event.currentTarget.weigth.value,
      objective: event.currentTarget.objective.value,
      gym: event.currentTarget.gym.value,
      services: event.currentTarget.services.value,
    };

    let profileResponse;
    if (id) {
      const profileToUpdate = { ...newProfile, id: id };
      profileResponse = await api.updateProfile(profileToUpdate);
      console.log(profileResponse);
    } else {
      profileResponse = await api.creatProfile(newProfile);
      setLoading(false);
    }

    if (profileResponse) {
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
        margin='10px'
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
                <Text borderBottomWidth="1px">
                  {id ? 'Atualizar perfil' : 'Criar novo perfil'}
                </Text>
                <Box>
                  <FormLabel>Nome:</FormLabel>
                  <Input
                    defaultValue={profiles?.name}
                    type="text"
                    name="name"
                    isRequired
                    placeholder="Nome"
                  />
                </Box>
                <Box>
                  <FormLabel>Foto:</FormLabel>
                  <Input
                    defaultValue={profiles?.image}
                    type="file"
                    name="image"
                    isRequired
                    placeholder="Foto"
                  />
                </Box>
                <Box>
                  <FormLabel>Altura:</FormLabel>
                  <Input
                    defaultValue={profiles?.tall}
                    type="number"
                    name="tall"
                    isRequired
                    placeholder="Altura"
                  />
                </Box>
                <Box>
                  <FormLabel>Peso:</FormLabel>
                  <Input
                    defaultValue={profiles?.weigth}
                    type="number"
                    name="weigth"
                    isRequired
                    placeholder="Peso"
                  />
                </Box>
                <Box>
                  <FormLabel>Objetivo:</FormLabel>
                  <Input
                    defaultValue={profiles?.objective}
                    type="text"
                    name="objective"
                    isRequired
                    placeholder="Objetivo"
                  />
                </Box>
                <Box>
                  <FormLabel>Academia:</FormLabel>
                  <Input
                    defaultValue={profiles?.gym}
                    type="text"
                    name="gym"
                    isRequired
                    placeholder="Academia"
                  />
                </Box>
                <Box>
                  <FormLabel>Serviços:</FormLabel>
                  <Textarea
                    defaultValue={profiles?.services}
                    name="services"
                    isRequired
                    placeholder="Serviços"
                  />
                </Box>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
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
      </Flex>
    </>
  );
}
