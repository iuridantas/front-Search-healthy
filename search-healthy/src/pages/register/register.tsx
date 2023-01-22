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
  FormLabel,
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiLogin';
import { UserInput } from '../../utils/types/requests';

export function Register() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleShowClick = () => setViewPassword(!viewPassword);

  function validateData(data: UserInput) {
    let dataIsValid = true;
    const error = {
      fields: [] as string[],
    };
    if (data.password.length < 8) {
      error.fields.push("password");
      dataIsValid = false;
    }

    if (!data.email.includes(".com")) {
      error.fields.push("email");
      dataIsValid = false;
    }

    return dataIsValid;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = {
      name: event.currentTarget.userName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      cpf: event.currentTarget.cpf.value,
    };

    const isValid = validateData(newUser);

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
              <FormLabel htmlFor="name">Nome:</FormLabel>
              <Input
                borderRadius={10}
                type="name"
                placeholder="name"
                name="name"
              />
               <FormLabel htmlFor="text">CPF:</FormLabel>
              <Input
                borderRadius={10}
                type="cpf"
                placeholder="cpf"
                name="cpf"
              />
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                borderRadius={10}
                type="email"
                placeholder="email"
                name="email"
              />
              <FormControl>
              <FormLabel htmlFor="password">Senha:</FormLabel>
                <InputGroup>
                  <Input
                    type={viewPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Senha"
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
