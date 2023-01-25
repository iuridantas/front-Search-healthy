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

export function Top() {
  const navigate = useNavigate();
  const { setSearch } = useContext(SearchContext);

  return (
    <>
      <Flex
        marginTop="10px"
        width="98%"
        display="flex"
        justifyContent="space-evenly"
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
        <Flex display="flex" justifyContent="center" width="50%">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="gray.300" />}
            />
            <Input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Nome do aluno"
            />
          </InputGroup>
        </Flex>
        <Button
          leftIcon={<IoMdAdd size={20} color="black" />}
          borderRadius={20}
          color="black"
          colorScheme="blue"
          type="submit"
          bg="rgba(66, 153, 225, 0.6)"
          onClick={() => {
            navigate('/created/training');
          }}
        >
          Criar Treino
        </Button>
      </Flex>
    </>
  );
}
