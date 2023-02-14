import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import SearchContext from '../../context/searchContext';

export function TopHome() {
  const { setSearch } = useContext(SearchContext);

  return (
    <Flex
      marginTop="10px"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Flex width="50%">
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
    </Flex>
  );
}
