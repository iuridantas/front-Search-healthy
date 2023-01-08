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

export function Login() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleShowClick = () => setViewPassword(!viewPassword);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const login = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    const userData = await api.signIn(login);
    setLoading(false);
    if (userData) {
      navigate('/home');
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
              <FormControl>
                <InputGroup>
                  <Input borderRadius={10} type="email" placeholder="email" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    type={viewPassword ? 'text' : 'password'}
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
              {loading ? (
                <Button
                  isLoading
                  loadingText="Loading"
                  borderRadius={20}
                  variant="solid"
                  colorScheme="blue"
                  color="black"
                  backgroundColor="rgba(66, 153, 225, 0.6)"
                />
              ) : (
                <Button
                  borderRadius={20}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  color="black"
                  backgroundColor="rgba(66, 153, 225, 0.6)"
                >
                  Login
                </Button>
              )}
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
          onClick={() => {
            navigate('/register');
          }}
        >
          Crie sua conta
        </Button>
      </Box>
    </Flex>
  );
}
