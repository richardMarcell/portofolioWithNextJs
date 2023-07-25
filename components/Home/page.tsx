"use client";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex
      marginTop="10"
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
          fontSize={{ xl: "4xl", lg: "3xl", md: "4xl", sm: "2xl", base: "2xl" }}
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
            base: "16px",
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
        >
          More
        </Button>
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
