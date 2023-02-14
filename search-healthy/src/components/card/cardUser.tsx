import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    CardFooter,
    Center,
    Image,
    Flex,
    Heading,
    Stack,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import { api } from '../../utils/api/apiUser';
  import { User } from '../../utils/types/requests';
  import swal from 'sweetalert';
  
  interface CardProps {
    users: User;
    updatePage: () => void;
  }
  
  export function CardUser({ users, updatePage }: CardProps) {
    const navigate = useNavigate();
    async function DeleteCard() {
      swal({
        title: 'Tem certeza que deseja deletar o usuario?',
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
        if (res && users.id) {
          const isDeleted = await api.deleteUser(users.id);
          if (isDeleted) {
            localStorage.removeItem('token');
            updatePage();
          }
          navigate('/');
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
              src={users.image}
              name={users.name}
              overflow="hidden"
              border="4px solid #B22222"
            />
          </Flex>
          <Box p="2" mt="4">
            <Stack spacing="0" align={'center'}>
              <Heading fontSize="2xl" fontWeight="500" fontFamily="body">
                {users.name}
              </Heading>
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
                    navigate('/User/update/' + users.id);
                  }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Editar
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Box>
        </Box>
      </Center>
    );
  }