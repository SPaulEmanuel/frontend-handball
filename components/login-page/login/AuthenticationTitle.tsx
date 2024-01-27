import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAtom } from "jotai";
import { token } from "@/components/jotai-state/token";

type ValuesLogin = {
  username: string;
  password: string;
};

const ApiUserLogin = async (data: ValuesLogin) => {
  const body = JSON.stringify(data);

  const responseAll = await fetch(
    "https://swaggerip.azurewebsites.net/Users/authenticate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json-patch+json",
      },
      body,
    }
  );

  return responseAll;
};

export function AuthenticationTitle() {
  const [tokenValue, setTokenValue] = useAtom(token);

  const router = useRouter();

  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });
  const [showError, setShowError] = useState();

  const handleCreateAccount = () => {
    router.push("/signin");
  };

  const handleForgotPassword = () => {
    router.push("/forgotpassword");
  };

  const handlerEvent = (e: any) => {
    const { name, value } = e.target;

    setLoginValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlerSubmit = async () => {
    const responseAll = await ApiUserLogin(loginValues);

    const respondData = await responseAll.json();

    if (!responseAll.ok) {
      setShowError(respondData.message);
      return;
    }
    setTokenValue(respondData);

    router.push("/admin/users");
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Bine ai venit !
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Inca nu ai cont?{" "}
        <Anchor size="sm" component="button" onClick={handleCreateAccount}>
          Creeaza cont
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Username"
          placeholder=""
          required
          name="username"
          onChange={handlerEvent}
        />
        <PasswordInput
          label="Parola"
          placeholder=""
          required
          mt="md"
          name="password"
          onChange={handlerEvent}
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Tine-ma minte" />
          <Anchor component="button" size="sm" onClick={handleForgotPassword}>
            Ai uitat parola?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={handlerSubmit}>
          Autentificare
        </Button>
      </Paper>
    </Container>
  );
}
