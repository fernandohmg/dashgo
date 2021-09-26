import { Flex, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import type { NextPage } from "next";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form/Input";

type SigninFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object({
  email: yup.string().required("E-mail is required").email("Invalid e-mail"),
  password: yup.string().required("Password is required"),
});

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
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
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            error={errors.password}
            {...register("password")}
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
