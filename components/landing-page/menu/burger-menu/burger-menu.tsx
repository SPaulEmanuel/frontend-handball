import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

export const BurgerMenu = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Burger
      opened={opened}
      onClick={toggle}
      aria-label="Toggle navigation"
      color={"#1B1B1B"}
    />
  );
};
