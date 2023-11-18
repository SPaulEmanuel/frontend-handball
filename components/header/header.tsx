"use client";

import React, { useState } from "react";
import classes from "./style.module.css";

import {
  Button,
  Container,
  Flex,
  Group,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { SunMoon } from "tabler-icons-react";

export const Header = () => {
  const route = useRouter();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [changeValue, setChangeValue] = useState("csu");

  const handlerClick = (value: string) => {
    setChangeValue(value);
  };

  const handlerChangeMode = () => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else setColorScheme("dark");
  };

  return (
    <Group bg="#4D6093" px={10} h={40} justify="space-between">
      <Flex gap={10}>
        <Button
          variant="transparent"
          fz={16}
          onClick={() => {
            handlerClick("csu");
            route.push("/landing-page");
          }}
          c="#000"
        >
          <Flex direction="column">
            {changeValue === "csu" ? (
              <Container className={classes.line} />
            ) : null}
            <Text fw={500}> CSU</Text>
          </Flex>
        </Button>

        <Button
          variant="transparent"
          fz={16}
          onClick={() => {
            handlerClick("tickets"), route.push("/landing-page/tickets");
          }}
          c="#000"
        >
          <Flex direction="column">
            {changeValue === "tickets" ? (
              <Container className={classes.line} />
            ) : null}
            <Text fw={500}>BILETE</Text>
          </Flex>
        </Button>

        <Button
          variant="transparent"
          fz={16}
          onClick={() => {
            handlerClick("history");
            route.push("/landing-page/history");
          }}
          c="#000"
        >
          <Flex direction="column">
            {changeValue === "history" ? (
              <Container className={classes.line} />
            ) : null}
            <Text fw={500}>ISTORIA CLUBULUI</Text>
          </Flex>
        </Button>
      </Flex>
      <Button variant="transparent" onClick={() => handlerChangeMode()}>
        <SunMoon size={22} strokeWidth={1} color={"black"} />
      </Button>
    </Group>
  );
};

export default Header;
