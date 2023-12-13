import { Box, SimpleGrid, Skeleton } from "@mantine/core";
import classes from "./style.module.scss";
import React from "react";

export const SkeletonMainPage = () => {
  // const theme = useMantineTheme();
  return (
    <>
      <SimpleGrid className={classes.simpleGridStyle}>
        {Array.from({ length: 8 }, (_, index) => {
          return (
            <Box w={328} mx={"auto"} key={index}>
              <Skeleton height={219} radius="xl" />
              <Skeleton height={8} mt={6} width="40%" radius="xl" />
              <Skeleton height={8} mt={6} width="60%" radius="xl" />
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};
