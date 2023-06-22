"use client";
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Heading
      textAlign="center"
      fontWeight="bold"
      mt="5"
      borderBottom="1px"
      pb="5"
      fontSize={{ lg: "4xl", md: "4xl", sm: "4xl", base: "3xl" }}
    >
      Catalogo de Pokémon
    </Heading>
  );
};

export default Header;
