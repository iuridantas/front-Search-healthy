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

interface CardProps extends Profiles {
  updatePage: () => void;
}

export function CardProfile({ _id, name, image, gym, updatePage }: CardProps) {
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
      console.log(res);
      if (res) {
        const isDeleted = await api.deleteProfile(_id);
        if (isDeleted) {
          updatePage();
        }
      }
    });
  }

  return (
    <Card
      maxW="sm"
    >
      <CardBody>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={name} src={image} />
          <Box>
            <Heading size="sm">{name}</Heading>
            <Text>{gym}</Text>
          </Box>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          {localStorage.getItem('token') ? (
            <Button
              backgroundColor="rgba(66, 153, 225, 0.6)"
              variant="solid"
              colorScheme="red"
              onClick={DeleteCard}
            >
              Remover
            </Button>
          ) : null}
          {localStorage.getItem('token') ? (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                navigate('/profile/update/' + _id);
              }}
            >
              Editar
            </Button>
          ) : null}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
