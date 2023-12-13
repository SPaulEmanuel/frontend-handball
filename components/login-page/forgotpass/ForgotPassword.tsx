import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "./ForgotPassword.module.css";
import { useRouter } from "next/navigation";

export function ForgotPassword() {
  const router = useRouter();

  const handleResetPassword = () => {
    router.push("/login");
  };

  const handleResetLink = () => {
    router.push("/resetlink");
  };

  return (
    <Container size={460} my={30}>
      <Title className={classes.title} ta="center">
        Ai uitat parola?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Introdu email-ul tau pentru a primi un link de resetare
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Email" placeholder="" required />
        <Group justify="center" mt="lg" className={classes.controls}>
          <Button className={classes.control} onClick={handleResetLink}>
            Reseteaza parola
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}
