"use client";
import { SkeletonMainPage } from "@/components/landing-page/main-page/skeleton-page";
import { Menu } from "@/components/landing-page/menu/menu";
import { SkeletonTeamPresentation } from "@/components/landing-page/team-presentation/skeleton-page";

import { Box, Space } from "@mantine/core";
import React from "react";

export default function Page() {
  return (
    <Box bg={"#F0F0FF"} p={13}>
      <Menu />

      <Box px={133}>
        <SkeletonTeamPresentation />
        <Space h={100} />
        <SkeletonMainPage />
      </Box>
    </Box>
  );
}
