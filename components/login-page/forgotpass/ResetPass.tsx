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
        Hi Customer, We see you've forgotten your password - thankfully, it's an
        easy fix. Simply open the link below and you'll be directed to create a
        new password: https://account.com If you didn't request a password
        change, please contact Customer Care free of charge by dialing 911 from
        your phone or by calling 1-800-000-0000. Thanks for choosing our
        company.
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
