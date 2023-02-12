import { FormEvent, useContext, useState } from 'react';
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  FormControl,
  InputRightElement,
  Heading,
  ButtonGroup,
  FormLabel,
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiLogin';
import UserContext from '../../context/userContext';

export function Login() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { tokenId, setTokenId } = useContext(UserContext);

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
    if (userData?.token) setTokenId(userData?.token);
    if (userData) {
      navigate('/home');
    }
  }

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="90vh"
    >
      <Stack mb="6">
        <Stack align={'center'} spacing={2} py={10} px={6}>
          <Heading fontSize={'4xl'}>Faça login em sua conta</Heading>
        </Stack>
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
                <FormLabel>Emaill:</FormLabel>
                <InputGroup>
                  <Input
                    borderRadius={10}
                    type="email"
                    placeholder="email"
                    name="email"
                    borderColor='black'
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
              <FormLabel>Senha:</FormLabel>
                <InputGroup>
                  <Input
                    type={viewPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    borderRadius={10}
                    borderColor='black'
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
              <ButtonGroup display="flex" justifyContent="center">
                {loading ? (
                  <Button
                    isLoading
                    loadingText="Loading"
                    bg="#151f21"
                    color="white"
                    rounded="md"
                    type="submit"
                  />
                ) : (
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
                    Login
                  </Button>
                )}
              </ButtonGroup>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
