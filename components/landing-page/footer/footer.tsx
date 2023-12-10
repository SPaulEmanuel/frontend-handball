import { Box, Flex, Group, Text, Image } from "@mantine/core";
import React from "react";
import classes from "./style.module.scss";
import NextImage from "next/image";

import LogoCSUBlack from "@/public/logo-icon/LogoCSUBlack.png";
import {
  BrandFacebook,
  BrandInstagram,
  BrandSnapchat,
  BrandTiktok,
  BrandTwitter,
  BrandYoutube,
} from "tabler-icons-react";

export const Footer = () => {
  return (
    <>
      <Box bg={"#4D6093"} className={classes.styleResponsiveAll}>
        <Group className={classes.line} justify="space-between" pt={50} px={50}>
          <Flex gap={50}>
            <Flex direction="column" gap="md" c={"#050505"}>
              <Text fz={24} fw={500}>
                CSU SUCEAVA
              </Text>
              <Text fz={16} fw={400}>
                Handbal
              </Text>
              <Text fz={16} fw={400}>
                Club
              </Text>
              <Text fz={16} fw={400}>
                Parteneri
              </Text>
            </Flex>
            <Flex direction="column" gap="md" c={"#050505"}>
              <Text fz={24} fw={500}>
                SERVICII
              </Text>
              <Text fz={16} fw={400}>
                Contul meu
              </Text>
              <Text fz={16} fw={400}>
                Bilete
              </Text>
              <Text fz={16} fw={400}>
                Magazin
              </Text>
            </Flex>
          </Flex>
          <Box>
            <Text c={"#050505"} fw={700}>
              CONTACT:
            </Text>
            <BrandFacebook size={30} strokeWidth={2} color={"black"} />
            <BrandInstagram size={30} strokeWidth={2} color={"black"} />
            <BrandTwitter size={30} strokeWidth={2} color={"black"} />
            <BrandYoutube size={30} strokeWidth={2} color={"black"} />
            <BrandSnapchat size={30} strokeWidth={2} color={"black"} />
            <BrandTiktok size={30} strokeWidth={2} color={"black"} />
            <Box w={74} pt={20}>
              <Image
                component={NextImage}
                src={LogoCSUBlack}
                alt="LogoCSUBlack"
                height={90}
              />
            </Box>
          </Box>
        </Group>
      </Box>
    </>
  );
};
