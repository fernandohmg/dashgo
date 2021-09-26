import { Flex, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SigninFormData = {
  email: string;
  password: string;
};

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const handleSignin: SubmitHandler<SigninFormData> = (values) => {
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
          <Input
            label="E-mail"
            type="email"
            error={errors.email}
            {...register("email", { required: "E-mail is required" })}
          />
          <Input
            label="Password"
            type="password"
            error={errors.password}
            {...register("password", { required: "Password is required" })}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
