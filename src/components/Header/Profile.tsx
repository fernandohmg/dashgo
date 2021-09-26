import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import React from "react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Fernando Gonçalves</Text>
        <Text color="gray.300" fontSize="small">
          fernando.hmg@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Fernando Gonçalves"
        src="https://github.com/fernandohmg.png"
      />
    </Flex>
  );
}
