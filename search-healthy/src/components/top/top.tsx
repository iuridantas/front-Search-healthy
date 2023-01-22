import { Button, Flex, Input } from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


export function Top(){
  const navigate = useNavigate();
  
  return (
    <>
      <Flex
        marginTop="10px"
        width="98%"
        display="flex"
        justifyContent="flex-end"
      >
        {' '}
        <Input
          type="text"
        />
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
