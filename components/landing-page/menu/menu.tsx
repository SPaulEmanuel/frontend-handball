import classes from "./style.module.css";
import NextImage from "next/image";
import { Flex, Group, Image, Text } from "@mantine/core";

import React from "react";
import { BurgerMenu } from "./burger-menu/burger-menu";
import logoCSU from "@/public/logo-icon/LogoCSU.png";
import { UserCircle } from "tabler-icons-react";
import Link from "next/link";

export const Menu = () => {
  return (
    <>
      <Group justify="space-between" pb={20}>
        <Flex gap={10}>
          <BurgerMenu />
          <Text fw={500} fz={16} c={"#000"} className={classes.menuStyle}>
            Menu
          </Text>
        </Flex>
        <Image
          component={NextImage}
          src={logoCSU}
          alt="My image"
          w={86}
          h={106}
        />
        <Link href={"/login"}>
          <UserCircle size={38} strokeWidth={2} color={"black"} />
        </Link>
      </Group>
    </>
  );
};
