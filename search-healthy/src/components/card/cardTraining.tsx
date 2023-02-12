import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CardFooter,
  Center,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Trainings } from '../../utils/types/requests';

interface CardProps {
  trainings: Trainings;
}

export function CardTraining({ trainings }: CardProps) {
  const navigate = useNavigate();

  return (
    <>
      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg="white"
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Stack>
            <Heading color="gray.700" fontSize={'2xl'} fontFamily={'body'}>
              {trainings.muscularegroup}
            </Heading>
            <Text color={'gray.500'}>Exercicio: {trainings.exercises}</Text>
            <Text color={'gray.500'}>Repetição: {trainings.repetition}</Text>
            <Text color={'gray.500'}>Aeróbico: {trainings.aerobic}</Text>
            <Text color={'gray.500'}>Alongamento: {trainings.stretching}</Text>
          </Stack>
          <CardFooter display="flex" justifyContent="center">
            <ButtonGroup spacing="2" mt="4">
              <Button
                w="full"
                bg="#151f21"
                color="white"
                rounded="md"
                onClick={() => {
                  navigate('/training/update/' + trainings.id);
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
      </Center>
    </>
  );
}
