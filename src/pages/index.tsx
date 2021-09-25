import { Flex, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import { Input } from "../components/Form/Input";

const SignIn: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW="360"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input label="E-mail" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
