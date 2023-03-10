import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../context/searchContext';

export function TopProfile() {
  const navigate = useNavigate();
  const { setSearch } = useContext(SearchContext);

  return (
    <Flex
      marginTop="10px"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Flex marginRight='10' width="50%">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Nome do aluno"
            borderColor='black'
          />
        </InputGroup>
      </Flex>
      <Button
        leftIcon={<IoMdAdd size={20} color="white" />}
        borderRadius="20"
        bg="#151f21"
        color="white"
        rounded="md"
        type="submit"
        onClick={() => {
          navigate('/created');
        }}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
      >
        Criar Perfil
      </Button>
    </Flex>
  );
}
