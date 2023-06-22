"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const Pagination = ({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) => {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams | null = useSearchParams();

  const queryStrings: { key: string; value: string }[] = [];

  searchParams?.forEach((value, key) => {
    queryStrings.push({ key, value });
  });

  const pokemonQueryString = queryStrings
    .filter((query) => query.key !== "page")
    .map((query) => `${query.key}=${query.value}`)
    .join("&");

  const handlePrevious = () => {
    const prevPage: number = currentPage - 1;
    router.push(`?${pokemonQueryString}&page=${prevPage}`);
  };

  const handleNext = () => {
    const nextPage: number = currentPage + 1;
    router.push(`?${pokemonQueryString}&page=${nextPage}`);
  };

  const handlePageClick = (pageNumber: number) => {
    router.push(`?${pokemonQueryString}&page=${pageNumber}`);
  };

  const renderPageNumber = () => {
    const pageNumbers: number[] = [];
    let startPage: number = currentPage - 2;
    let endPage: number = currentPage + 1;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(4, totalPage);
    }

    if (endPage > totalPage) {
      endPage = totalPage;
      startPage = Math.max(1, totalPage - 3);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) => (
      <Button
        key={pageNumber}
        colorScheme={currentPage === pageNumber ? "blue" : "gray"}
        onClick={() => handlePageClick(pageNumber)}
        mx="1"
      >
        {pageNumber}
      </Button>
    ));
  };
  return (
    <div>
      <Flex justifyContent="center" mt="5">
        <Box>
          <Button
            isDisabled={currentPage === 1 ? true : false}
            colorScheme="blue"
            onClick={handlePrevious}
            mx="1"
          >
            Previous
          </Button>
          {renderPageNumber()}
          <Button
            isDisabled={currentPage === totalPage}
            colorScheme="blue"
            onClick={handleNext}
            mx="1"
          >
            Next
          </Button>
        </Box>
      </Flex>
    </div>
  );
};

export default Pagination;
