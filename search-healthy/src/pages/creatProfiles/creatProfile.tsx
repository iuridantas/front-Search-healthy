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
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { api } from '../../utils/api/apiProfile';
import { Profiles, User, ProfilesInput } from '../../utils/types/requests';

export function CreatProfile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profiles>();
  const {user} = useContext(UserContext);
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    const newProfile = {
      name: formData.get('name')?.toString() || '',
      image: formData.get('image')?.toString() || '',
      objective: formData.get('objective')?.toString() || '',
      gym: formData.get('gym')?.toString() || '',
      personalsIds: [user?.id ?? ''],
      studentsIds: [],
    };

    let profileResponse;
    if (id) {
      const profileToUpdate = { ...newProfile, id: id };
      profileResponse = await api.updateProfile(profileToUpdate);
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
                    type="text"
                    name="image"
                    isRequired
                    placeholder="Foto"
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
                {id ? (
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
                      Editar
                    </Button>
                  </Box>
                ) : (
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
                )}
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
