import { Button, Flex, Input } from '@chakra-ui/react';
import { useContext } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../context/searchContext';


export function Top(){
  const navigate = useNavigate();
  const {setSearch} = useContext(SearchContext)

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
        onChange={(e) => setSearch(e.target.value)}
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
