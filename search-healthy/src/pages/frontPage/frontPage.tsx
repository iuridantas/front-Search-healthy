import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function FrontPage() {
  const navigate = useNavigate();

  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex p="8" flex="1" align="center" justify="center">
        <Stack spacing="6" w="full" maxW="lg">
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              Search Healthy
            </Text>
          </Heading>
          <Text textAlign='justify' fontSize={{ base: 'md', lg: 'lg' }} color="black.500">
            Transforme sua rotina de treinamento com a Search Healthy. Com um
            plano de treinamento personalizado, baseado em suas metas e
            preferências pessoais, você terá acesso a um treinador virtual 24/7,
            sempre pronto para motivá-lo e ajudá-lo a alcançar seus objetivos.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing="4">
            <Button
              bg="#151f21"
              color="white"
              rounded="md"
              type="submit"
              onClick={() => {
                navigate('/login');
              }}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Faça seu Login
            </Button>
            <Button
              bg="#151f21"
              color="white"
              rounded="md"
              type="submit"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              onClick={() => {
                navigate('/register');
              }}
            >
              Cliente Novo
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex="1">
        <Image
          alt="Login Image"
          objectFit="cover"
          src={
            '../../home.jpeg'
          }
        />
      </Flex>
    </Stack>
  );
}
