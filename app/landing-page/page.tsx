"use client";
import { Footer } from "@/components/landing-page/footer/footer";
import { SkeletonMainPage } from "@/components/landing-page/main-page/skeleton-page";
import { Menu } from "@/components/landing-page/menu/menu";
import { Partners } from "@/components/landing-page/partners/partners";
import { SkeletonTeamPresentation } from "@/components/landing-page/team-presentation/skeleton-page";

import { Box, Space } from "@mantine/core";
import React from "react";
import classes from "./style.module.scss";

export default function Page() {
  return (
    <Box>
      <Box bg={"#F0F0FF"} p={13}>
        <Menu />

        <Box className={classes.boxStyle}>
          <SkeletonTeamPresentation />
          <Space h={100} />
          <SkeletonMainPage />
          <Space h={100} />
          <Partners />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
