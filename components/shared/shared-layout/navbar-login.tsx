"use client";
import cx from "clsx";
import { useEffect, useState } from "react";
import NextImage from "next/image";
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./style.module.scss";
import logoCSU from "@/public/logo-icon/LogoCSU.png";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { token } from "@/components/jotai-state/token";

const tabs = ["Users", "Personal", "Jucatori", "Meciuri"];

export const NavbarLogin = () => {
  const route = useRouter();
  const [tokenValue, setTokenValue] = useAtom(token);
  const [user, setUser] = useState({
    name: "",
    email: "",
    image: "",
  });

  const [opened, { toggle }] = useDisclosure(false);

  const [userMenuOpened, setUserMenuOpened] = useState(false);

  useEffect(() => {
    setUser((prev: any) => ({
      ...prev,
      name: tokenValue.FirstName + " " + tokenValue.LastName,
      image: tokenValue.ImageUrl,
    }));
  }, [tokenValue]);

  const handlerEvent = (tab: string) => {
    const lowercaseTab = tab.toLowerCase();
    route.push(`/admin/${lowercaseTab}`);
  };

  const handlerLogOut = () => {
    route.push("/login");
    setTokenValue({
      Id: "",
      FirstName: "",
      LastName: "",
      Token: "",
      ImageUrl: "",
    });
  };

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      <div onClick={() => handlerEvent(tab)}>{tab}</div>
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <Image
            component={NextImage}
            src={logoCSU}
            alt="LogoCompany"
            height={50}
          />

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group gap={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={20}
                  />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconSettings
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Account settings
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconSwitchHorizontal
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Change account
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconLogout
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                onClick={handlerLogOut}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container size="md">
        <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
};
