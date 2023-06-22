"use client";
import { Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Heading
      textAlign="center"
      fontWeight="bold"
      mt="5"
      borderBottom="1px"
      pb="5"
      fontSize={{ lg: "4xl", md: "4xl", sm: "4xl", base: "3xl" }}
    >
      @2023 - Richard Marcell
    </Heading>
  );
};

export default Footer;
