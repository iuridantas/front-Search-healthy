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
          rounded="20"
          p={6}
          overflow={'hidden'}
        >
          <Stack align="center">
            <Heading color="gray.700" fontSize={'2xl'} fontFamily={'body'}>
              {trainings.muscularegroup}
            </Heading>
            <Text>Exercicio: {trainings.exercises}</Text>
            <Text>Repetição: {trainings.repetition}</Text>
            <Text>Aeróbico: {trainings.aerobic}</Text>
            <Text>Alongamento: {trainings.stretching}</Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src='../../public/treino.jpg'
            name='Treino'
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text color={'gray.500'}>Treino criado em:</Text>
            <Text align={'center'} color={'gray.500'}>{trainings.day}</Text>
          </Stack>
        </Stack>
        </Box>
      </Center>
    </>
  );
}
