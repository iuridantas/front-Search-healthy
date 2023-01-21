import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { FormEvent } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api/apiProfile';

export function Top() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newProfile = {
      name: event.currentTarget.userName.value,
      image: event.currentTarget.image.value,
      tall: event.currentTarget.tall.value,
      weigth: event.currentTarget.weigth.value,
      objective: event.currentTarget.objective.value,
      gym: event.currentTarget.gym.value,
      services: event.currentTarget.services.value,
    };

    const userData = await api.creatProfile(newProfile);
  }

  return (
    <>
      <Flex
        marginTop="10px"
        width="98%"
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          leftIcon={<IoMdAdd size={20} color="black" />}
          borderRadius={20}
          color="black"
          colorScheme="blue"
          type="submit"
          bg="rgba(66, 153, 225, 0.6)"
          onClick={onOpen}
        >
          Criar Perfil
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Criar novo perfil
            </DrawerHeader>

            <DrawerBody>
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
                </Stack>
              </form>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}
