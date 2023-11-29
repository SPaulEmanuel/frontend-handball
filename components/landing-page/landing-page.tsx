"use client";
import React, { useState } from "react";
import classes from "./style.module.scss";

import { Box, Space } from "@mantine/core";
import { Menu } from "./menu/menu";
import { SkeletonTeamPresentation } from "./team-presentation/skeleton-page";
import { Navbar } from "./navbar/navbar";
import { News } from "./main-page/news/news";
import { Partners } from "./partners/partners";
import { Footer } from "./footer/footer";

interface IProps {
  data: any;
}

export const LandingPage = ({ data }: IProps) => {
  const [choose, setChoose] = useState("news");

  const handlerClick = (value: string) => {
    console.log("am intrat");
    setChoose(value);
  };
  console.log(choose);
  return (
    <>
      <div className={classes.bodyStyle}>
        <Menu />
        <div className={classes.boxStyle}>
          <SkeletonTeamPresentation />
          <Navbar chooseView={handlerClick} />
          <Space h={100} />
          {choose === "news" ? <News data={data} /> : null}

          <Space h={100} />
          <Partners />
        </div>
      </div>
      <Footer />
    </>
  );
};
