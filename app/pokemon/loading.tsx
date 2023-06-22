"use client";
import { Flex, Skeleton } from "@chakra-ui/react";

const Loading = () => {
  const skeletonCount: number = 3; // Jumlah skeleton yang ingin ditampilkan

  return (
    <Flex wrap="wrap" alignItems="center" justifyContent="center">
      {Array.from({ length: skeletonCount }, (_, index) => (
        <Skeleton key={index} width="400px" height="450px" m="4">
          <Skeleton mx="auto" maxW={{ base: "100%", sm: "200px" }} />
        </Skeleton>
      ))}
    </Flex>
  );
};

export default Loading;
