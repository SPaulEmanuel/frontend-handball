import React from "react";
import classes from "./style.module.scss";

import { Image } from "@mantine/core";

interface IProps {
  imageURL: string;
}

export const PresentationImage = ({ imageURL }: IProps) => {
  return (
    <>
      <Image
        height={570}
        src={imageURL}
        alt="imageTeam"
        radius="md"
        className={classes.dynamicStyle}
      />
    </>
  );
};
