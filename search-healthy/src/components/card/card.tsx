import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiProfile';
import { Profiles } from '../../utils/types/requests';
import swal from 'sweetalert';

interface CardProps {
  profiles: Profiles
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
    <Card
      maxW="sm"
      margin='10px'
    >
      <CardBody>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={profiles.name} src={profiles.image}/>
          <Box>
            <Heading size="sm">{profiles.name}</Heading>
            <Text>{profiles.gym}</Text>
          </Box>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
            <Button
              backgroundColor="rgba(66, 153, 225, 0.6)"
              variant="solid"
              colorScheme="red"
              onClick={DeleteCard}
            >
              Remover
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                navigate('/profile/update/' + profiles.id);
              }}
            >
              Editar
            </Button>
            <Button
              variant="solid"
              colorScheme="blue"
              backgroundColor="rgba(66, 153, 225, 0.6)"
              onClick={() => {
                navigate('/training/find/' + profiles.id);
              }}
            >
              Treino
            </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
