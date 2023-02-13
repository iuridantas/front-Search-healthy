import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Link,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

export default function Contact() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading display="flex" justifyContent="center" paddingBottom='5'>
                    Contato
                  </Heading>
                  <Box
                    display="flex"
                    justifyContent="center"
                    py={{ base: 5, sm: 5, md: 8, lg: 10 }}
                  >
                    <VStack
                      pl={0}
                      spacing={3}
                      alignItems="flex-start"
                    >
                      <Text
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        display="flex"
                        justifyContent="center"
                      >
                        +55 (00) 0 0000-0000
                      </Text>
                      <Text
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        display="flex"
                        justifyContent="center"
                      >
                        SearchHealthy@hotmail.com
                      </Text>
                      <Text
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        display="flex"
                        justifyContent="center"
                      >
                        Aracaju, Brasil
                      </Text>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                    display="flex"
                    justifyContent="center"
                  >
                    <Link
                      href="https://www.linkedin.com/in/iurimota/"
                      target="_blank"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaLinkedin size="28px" />}
                      />
                    </Link>
                    <Link href="https://github.com/iuridantas" target="_blank">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaGithub size="28px" />}
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/iuri.dantass/"
                      target="_blank"
                    >
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaInstagram size="28px" />}
                      />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
