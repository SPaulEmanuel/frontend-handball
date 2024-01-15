import React from "react";
import { AutocompleteData } from "@/components/login-page/signin/AutocompleteData";
import { PassStr } from "@/components/login-page/signin/PassStr";
import { Button, Container, Paper, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const handleSuccesSignIn = () => {
    router.push("/login");
  };

  return (
    <Container>
      <Paper withBorder shadow="md" p={50} mt={40} radius="md">
        <TextInput label="First name" placeholder="" required />
        <TextInput label="Last name" placeholder="" required />
        <AutocompleteData />
        <PassStr />
        <Button fullWidth mt="xl" onClick={handleSuccesSignIn}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};

export default SignIn;
