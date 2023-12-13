import React from "react";
import { AutocompleteData } from "@/components/login-page/signin/AutocompleteData";
import { PassStr } from "@/components/login-page/signin/PassStr";
import { Button, Container, Paper } from "@mantine/core";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const handleSuccesSignIn = () => {
    router.push("/login");
  };

  return (
    <Container>
      <Paper withBorder shadow="md" p={50} mt={40} radius="md">
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
