"use client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Next Js 13",
};

const Learning = () => {
  return (
    <div>
      <Box height="300px">
        <Flex alignItems="center" justifyContent="center">
          <Heading textAlign="center">Hello World 1</Heading>
        </Flex>
      </Box>
    </div>
  );
};
export default Learning;
