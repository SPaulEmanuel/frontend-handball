import classes from "./style.module.scss";
import { Box, Skeleton } from "@mantine/core";
import React from "react";

export const SkeletonTeamPresentation = () => {
  return (
    <>
      <Skeleton
        height={570}
        radius="xl"
        color={"blue"}
        className={classes.dynamicStyle}
      />
    </>
  );
};
