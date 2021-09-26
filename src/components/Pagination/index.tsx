import { HStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <HStack spacing="6" mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack>
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </HStack>
    </HStack>
  );
}
