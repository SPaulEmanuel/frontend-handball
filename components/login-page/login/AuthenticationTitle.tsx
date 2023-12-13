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

export function AuthenticationTitle() {
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push("/signin");
  };

  const handleForgotPassword = () => {
    router.push("/forgotpassword");
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
        <TextInput label="Email" placeholder="" required />
        <PasswordInput label="Parola" placeholder="" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Tine-ma minte" />
          <Anchor component="button" size="sm" onClick={handleForgotPassword}>
            Ai uitat parola?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Autentificare
        </Button>
      </Paper>
    </Container>
  );
}
