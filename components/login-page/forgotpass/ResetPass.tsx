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

export function ResetLink() {
  const router = useRouter();

  const handleResetLink = () => {
    router.push("/login");
  };

  return (
    <Container size={460} my={30}>
      <Text c="dimmed" fz="sm" ta="center">
        Un link de resetare a parolei a fost generat și trimis la adresa dvs. de
        e-mail asociată contului.Vă rugăm să verificați adresa de e-mail și să
        urmați instrucțiunile din mesajul primit pentru a finaliza procesul de
        resetare a parolei. Asigurați-vă că verificați și folderul cu spam sau
        junk în cazul în care nu găsiți imediat e-mailul în casuta de intrare.
      </Text>

      <Paper>
        <Group mt="lg" className={classes.controls}>
          <Anchor c="dimmed" size="sm" className={classes.control}>
            <Center inline>
              <IconArrowLeft
                style={{ width: rem(32), height: rem(22) }}
                stroke={2.5}
              />
              <Box ml={15} onClick={handleResetLink}>
                Back to the login page
              </Box>
            </Center>
          </Anchor>
        </Group>
      </Paper>
    </Container>
  );
}
