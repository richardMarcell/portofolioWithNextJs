"use client";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      id="home"
      marginTop="10"
      paddingTop="40"
      justifyContent={{
        xl: "space-between",
        lg: "space-between",
        md: "normal",
        sm: "normal",
        base: "normal",
      }}
      paddingX={{ xl: "20", lg: "20" }}
      flexDir={{
        xl: "row",
        lg: "row",
        md: "column-reverse",
        sm: "column-reverse",
        base: "column-reverse",
      }}
    >
      <Flex
        flexDir="column"
        paddingX={{ xl: "0", lg: "0", md: "20", sm: "10", base: "10" }}
        marginRight={{ xl: "5", lg: "5", md: "0", sm: "0", base: "0" }}
        width={{ xl: "600px", lg: "550px" }}
        alignItems={{
          xl: "start",
          lg: "start",
          md: "center",
          sm: "center",
          base: "center",
        }}
      >
        <Heading
          color="orange.400"
          textAlign={{
            xl: "left",
            lg: "left",
            md: "center",
            sm: "center",
            base: "center",
          }}
          fontSize={{ xl: "4xl", lg: "3xl", md: "4xl", sm: "2xl", base: "xl" }}
        >
          Unveiling Creativity: Explore the Dazzling Portfolio of Richard
          Marcell
        </Heading>
        <Text
          marginTop={{ xl: "5", lg: "5", md: "0", sm: "0", base: "0" }}
          textAlign={{
            xl: "left",
            lg: "left",
            md: "center",
            sm: "center",
            base: "center",
          }}
          fontSize={{
            xl: "20px",
            lg: "16px",
            md: "20px",
            sm: "16px",
            base: "12px",
          }}
        >
          Welcome to my captivating portfolio! I am Richard Marcell, a
          passionate and versatile creative with a flair for innovation and a
          keen eye for detail.
        </Text>
        <Button
          marginTop="5"
          colorScheme="purple"
          width={{
            xl: "200px",
            lg: "200px",
            md: "200px",
            sm: "200px",
            base: "200px",
          }}
          onClick={onOpen}
        >
          Contact
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex alignItems="center">
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
                <Box marginLeft="2">
                  <Heading>Richard Marcell</Heading>
                  <Text fontWeight="medium">Full Stack Web Developer</Text>
                </Box>
              </Flex>
              <Flex marginTop="5">
                <LocalPhoneRoundedIcon />
                <Text marginLeft="3">081554098919</Text>
              </Flex>
              <Flex marginTop="5">
                <AttachEmailRoundedIcon />
                <Text marginLeft="3">richard.marcell8888@gmail.com</Text>
              </Flex>
            </ModalBody>
            <Flex justifyContent="space-between" padding="6">
              <Image src="/logo.svg" width="150px" />
              <Button colorScheme="orange" onClick={onClose}>
                Close
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>
      <Flex
        marginLeft={{ xl: "20", lg: "20", md: "0", sm: "0", base: "0" }}
        justifyContent="center"
        marginBottom={{ xl: "0", lg: "0", md: "5", sm: "5", base: "5" }}
      >
        <Image
          src="/homeIlustration.svg"
          width={{
            xl: "500px",
            lg: "450px",
            md: "400px",
            sm: "350px",
            base: "300px",
          }}
          alt="ilustration home"
        />
      </Flex>
    </Flex>
  );
};

export default HomePage;
