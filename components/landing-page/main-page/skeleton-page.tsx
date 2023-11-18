import { Box, SimpleGrid, Skeleton } from "@mantine/core";
import React from "react";

export const SkeletonMainPage = () => {
  // const theme = useMantineTheme();
  return (
    <>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {Array.from({ length: 8 }, (_, index) => {
          return (
            <Box w={328}>
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
