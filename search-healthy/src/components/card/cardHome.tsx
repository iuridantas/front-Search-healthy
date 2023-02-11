import {
  Avatar,
  Box,
  Button,
  Image,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Text,
  Center,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiProfile';
import { Profiles } from '../../utils/types/requests';
import swal from 'sweetalert';

interface CardProps {
  profiles: Profiles;
  updatePage: () => void;
}

export function CardHome({ profiles, updatePage }: CardProps) {
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
        const isDeleted = await api.deleteProfile(profiles.id);
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
        <Box p="6">
          <Stack spacing="0" align="center">
            <Heading fontSize="2xl" fontWeight="500" fontFamily="body">
              {profiles.name}
            </Heading>
            <Text color="gray.500">Academia: {profiles.gym}</Text>
          </Stack>

          <Button
            w="full"
            mt="8"
            bg="#151f21"
            color="white"
            rounded="md"
            onClick={() => {
              navigate('/training/find/' + profiles.id);
            }}
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: 'lg',
            }}
          >
            Editar
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
