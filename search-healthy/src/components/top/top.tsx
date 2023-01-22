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
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../utils/api/apiProfile';
import { Profiles, ProfilesInput } from '../../utils/types/requests';

export function Top() {
  const navigate = useNavigate();

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
          onClick={() => {
            navigate('/created');
          }}
        >
          Criar Perfil
        </Button>
       
      </Flex>
    </>
  );
}
