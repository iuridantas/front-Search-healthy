import { useState } from 'react';
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  FormControl,
  InputRightElement,
  FormLabel,
  ButtonGroup,
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiLogin';

export function Register() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleShowClick = () => setViewPassword(!viewPassword);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = new FormData(event.currentTarget);

    const userData = await api.registerUser(newUser);
    if (userData) {
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
              <FormLabel htmlFor="name">Nome:</FormLabel>
              <Input
                borderRadius={10}
                type="name"
                placeholder="name"
                name="name"
                borderColor='black'
                required
              />
              <FormLabel htmlFor="text">CPF:</FormLabel>
              <Input
                borderRadius={10}
                type="text"
                placeholder="cpf"
                name="cpf"
                borderColor='black'
                required
              />
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                borderRadius={10}
                type="email"
                placeholder="email"
                name="email"
                borderColor='black'
                required
              />
              <FormLabel htmlFor="role">Personal ou Aluno:</FormLabel>
              <Input
                borderRadius={10}
                type="text"
                placeholder="Personal ou Aluno"
                name="role"
                borderColor='black'
                required
              />
              <FormControl>
                <FormLabel htmlFor="password">Senha:</FormLabel>
                <InputGroup>
                  <Input
                    type={viewPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Senha"
                    borderColor='black'
                    required
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
              <ButtonGroup display="flex" spacing="20" justifyContent="center">
                <Button
                  bg="#151f21"
                  color="white"
                  rounded="md"
                  type="submit"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Cadastrar
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
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
