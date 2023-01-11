import { FormEvent, useState } from 'react';
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  FormControl,
  InputRightElement,
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiLogin';

export function Register() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleShowClick = () => setViewPassword(!viewPassword);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = {
      name: event.currentTarget.userName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      cpf: event.currentTarget.cpf.value,
    };

    const userData = await api.registerUser(newUser);
    console.log(userData);
    if (userData) {
      navigate('/login');
    }
  }

  return (
    <Flex
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
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
              <Input
                borderRadius={10}
                type="name"
                placeholder="name"
                name="name"
              />
              <Input
                borderRadius={10}
                type="cpf"
                placeholder="cpf"
                name="cpf"
              />
              <Input
                borderRadius={10}
                type="email"
                placeholder="email"
                name="email"
              />
              <FormControl>
                <InputGroup>
                  <Input
                    type={viewPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
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
          Cadastrar
        </Button>
      </Box>
    </Flex>
  );
}
