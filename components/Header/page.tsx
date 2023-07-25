"use client";

import { Box, Divider, Flex, Image, Link } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

const Header = () => {
  const navigations: string[] = ["Home", "Background", "Experience", "Contact"];

  const colors: { primary: string; secondary: string } = {
    primary: "purple.400",
    secondary: "orange.400",
  };

  const [hamburgerMenuPositionOnTop, setHamburgerMenuPositionOnTop] =
    useState<string>("-96");

  const handleHamburgerMenuOnClick = () => {
    setHamburgerMenuPositionOnTop("0");
  };

  const handleCloseButtonOnClick = () => {
    setHamburgerMenuPositionOnTop("-96");
  };

  const searchParams = useSearchParams();

  return (
    <Box>
      <Flex justifyContent="space-between" p={{ base: "2", md: "3", lg: "5" }}>
        <Image
          src="/logo.svg"
          alt="logo portofolio"
          width={{ base: "200px", md: "250px", lg: "300px" }}
        />
        <Flex
          alignItems="center"
          flexDir={{ lg: "row", md: "column", sm: "column", base: "column" }}
          position={{ base: "fixed", md: "fixed", lg: "static" }}
          backgroundColor={{
            lg: "transparent",
            md: `${colors.primary}`,
            sm: `${colors.primary}`,
            base: `${colors.primary}`,
          }}
          color={{ lg: "black", md: "white", sm: "white", base: "white" }}
          top={hamburgerMenuPositionOnTop}
          right="0"
          left="0"
          zIndex="dropdown"
        >
          <Box
            position="fixed"
            right="0"
            m="5"
            _hover={{ cursor: "pointer" }}
            display={{ base: "block", md: "block", lg: "none" }}
            onClick={handleCloseButtonOnClick}
          >
            <CloseRoundedIcon />
          </Box>
          {navigations.map((nav) => (
            <Link
              key={nav}
              href={"?page=" + nav.toLowerCase()}
              fontWeight="medium"
              marginX={{ lg: "5", md: "0", sm: "0", base: "0" }}
              marginY={{ lg: "0", md: "5", sm: "5", base: "5" }}
              _hover={{ color: `${colors.secondary}`, fontWeight: "bold" }}
            >
              {nav}
            </Link>
          ))}
        </Flex>
        <Flex
          alignItems="center"
          display={{ base: "block", md: "block", lg: "none" }}
          cursor="pointer"
          onClick={handleHamburgerMenuOnClick}
        >
          <MenuRoundedIcon fontSize="large" />
        </Flex>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Header;
