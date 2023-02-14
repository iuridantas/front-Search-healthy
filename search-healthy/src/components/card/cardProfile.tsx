import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Image,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiProfile';
import { Profiles } from '../../utils/types/requests';
import swal from 'sweetalert';
import { IoMdAdd } from 'react-icons/io';

interface CardProps {
  profiles: Profiles;
  updatePage: () => void;
}

export function CardProfile({ profiles, updatePage }: CardProps) {
  const navigate = useNavigate();
  async function DeleteCard() {
    swal({
      title: 'Tem certeza que deseja deletar o perfil?',
      icon: 'warning',
      dangerMode: true,
      buttons: {
        cancel: {
          text: 'Cancelar',
          value: null,
          visible: true,
          closeModal: true,
          className: '',
        },
        confirm: {
          text: 'Confirmar',
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async (res) => {
      if (res) {
        const isDeleted = await api.deleteProfile(profiles.id ?? '');
        if (isDeleted) {
          updatePage();
        }
      }
    });
  }

  return (
    <Center>
      <Box w="full" bg="white" boxShadow="2xl" rounded="20" overflow="hidden">
        <Image
          h="120px"
          w="full"
          borderBottom="4px solid #B22222"
          src="../../public/foto.jpg"
          objectFit="cover"
        />
        <Flex justify="center" mt="-12">
          <Avatar
            size="xl"
            src={profiles.image}
            name={profiles.name}
            overflow="hidden"
            border="4px solid #B22222"
          />
        </Flex>
        <Box p="2" mt="4">
          <Stack spacing="0" align={'center'}>
            <Heading fontSize="2xl" fontWeight="500" fontFamily="body">
              {profiles.name}
            </Heading>
            <Text color="gray.500">Academia: {profiles.gym}</Text>
            <Text color="gray.500">Objetivo: {profiles.objective}</Text>
          </Stack>
          <CardFooter display="flex" justifyContent="center">
            <ButtonGroup spacing="2" mt="4">
              <Button
                w="full"
                bg="#151f21"
                color="white"
                rounded="md"
                type="submit"
                onClick={DeleteCard}
                _hover={{
                  bg: 'red',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Remover
              </Button>
              <Button
                w="full"
                bg="#151f21"
                color="white"
                rounded="md"
                type="submit"
                onClick={() => {
                  navigate('/profile/update/' + profiles.id);
                }}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Editar
              </Button>
              <Button
                w="full"
                bg="#151f21"
                color="white"
                rounded="md"
                type="submit"
                onClick={() => {
                  navigate('/training/find/' + profiles.id);
                }}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Treino
              </Button>
            </ButtonGroup>
          </CardFooter>
          <Flex display="flex" justifyContent="center">
            <Button
              leftIcon={<IoMdAdd size={20} />}
              w="50%"
              bg="#151f21"
              color="white"
              rounded="md"
              type="submit"
              mt="2"
              onClick={() => {
                navigate('/created/training/' + profiles.id, {
                  state: { isCreated: true },
                });
              }}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Criar Treino
            </Button>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}
