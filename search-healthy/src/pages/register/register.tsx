import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  FormControl,
  Text,
  InputRightElement,
  FormLabel,
  ButtonGroup,
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../utils/api/apiUser';
import { User } from '../../utils/types/requests';

export function Register() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState<User>();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  async function getUserById() {
    if (id) {
      const user = await api.getUserById(id);
      setUsers(user);
    }
  }

  const handleShowClick = () => setViewPassword(!viewPassword);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newUser = {
      name: formData.get('name')?.toString() || '',
      image: formData.get('image')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
      cpf: formData.get('cpf')?.toString() || '',
      role: formData.get('role')?.toString() || '',
    };

    let userResponse;
    if (id) {
      const profileToUpdate = { ...newUser, id: id };
      userResponse = await api.updateUser(profileToUpdate);
      navigate('/user');
    } else {
      userResponse = await api.registerUser(newUser);
      setLoading(false);
      navigate('/login');
    }
  }

  return (
    <Flex
      flexDirection="column"
      height="100%"
      justifyContent="center"
      alignItems="center"
      margin="20px"
      h="90vh"
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
                borderBottomWidth="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="2xl"
                borderColor="black"
              >
                {id ? 'Atualizar conta' : 'Criar nova conta'}
              </Text>
              <FormLabel htmlFor="name">Nome:</FormLabel>
              <Input
                defaultValue={users?.name}
                borderRadius={10}
                type="name"
                placeholder="name"
                name="name"
                borderColor="black"
              />
              <FormLabel htmlFor="name">Foto:</FormLabel>
              <Input
                defaultValue={users?.image}
                borderRadius={10}
                type="text"
                name="image"
                placeholder="Foto"
                borderColor="black"
              />
              <FormLabel htmlFor="text">CPF:</FormLabel>
              <Input
                defaultValue={users?.cpf}
                borderRadius={10}
                type="text"
                placeholder="cpf"
                name="cpf"
                borderColor="black"
              />
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                defaultValue={users?.email}
                borderRadius={10}
                type="email"
                placeholder="email"
                name="email"
                borderColor="black"
              />
              <FormLabel htmlFor="role">Personal ou Aluno:</FormLabel>
              <Input
                defaultValue={users?.role}
                borderRadius={10}
                type="text"
                placeholder="Personal ou Aluno"
                name="role"
                borderColor="black"
              />
              <FormControl>
                <FormLabel htmlFor="password">Senha:</FormLabel>
                <InputGroup>
                  <Input
                    type={viewPassword ? 'text' : 'password'}
                    defaultValue={users?.password}
                    name="password"
                    placeholder="Senha"
                    borderColor="black"
                    borderRadius={10}
                  />
                  <InputRightElement width="3rem">
                    <Button
                      h="1.75rem"
                      size="1"
                      bg="none"
                      onClick={handleShowClick}
                    >
                      {viewPassword ? (
                        <AiFillEyeInvisible size={30} />
                      ) : (
                        <AiFillEye size={30} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {id ? (
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ButtonGroup
                    display="flex"
                    spacing="20"
                    justifyContent="center"
                  >
                    <Button
                      w="20%"
                      bg="#151f21"
                      color="white"
                      rounded="md"
                      type="submit"
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      bg="#151f21"
                      color="white"
                      type="submit"
                      rounded="md"
                      onClick={() => {
                        navigate('/user');
                      }}
                      _hover={{
                        bg: 'red',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                    >
                      Cancelar
                    </Button>
                  </ButtonGroup>
                </Box>
              ) : (
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ButtonGroup
                    display="flex"
                    spacing="20"
                    justifyContent="center"
                  >
                    <Button
                      bg="#151f21"
                      color="white"
                      type="submit"
                      rounded="md"
                      _hover={{
                        bg: 'green',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                    >
                      Criar
                    </Button>
                    <Button
                      bg="#151f21"
                      color="white"
                      type="submit"
                      rounded="md"
                      onClick={() => {
                        navigate('/');
                      }}
                      _hover={{
                        bg: 'red',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                    >
                      Cancelar
                    </Button>
                  </ButtonGroup>
                </Box>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
