"use client";
import React, { useState } from "react";
import classes from "./style.module.scss";

import { Space } from "@mantine/core";
import { Menu } from "./menu/menu";
import { Navbar } from "./navbar/navbar";
import { News } from "./main-page/news/news";
import { Partners } from "./partners/partners";
import { Footer } from "./footer/footer";
import { PresentationImage } from "./team-presentation/presentation-image/presentation-image";
import { Team } from "./main-page/team/team";

interface IProps {
  data: INews[];
  teamData: any;
  imageTeam: any;
}

export const LandingPage = ({ data, imageTeam, teamData }: IProps) => {
  const [choose, setChoose] = useState("news");

  const handlerClick = (value: string) => {
    setChoose(value);
  };

  console.log(imageTeam);
  return (
    <>
      <div className={classes.bodyStyle}>
        <Menu />
        <div className={classes.boxStyle}>
          <PresentationImage imageURL={imageTeam[0].UrlImage} />
          <Navbar chooseView={handlerClick} />

          {choose === "news" ? (
            <>
              <Space h={100} />
              <News data={data} />
            </>
          ) : null}

          {choose === "team" ? <Team teamData={teamData} /> : null}
          <Space h={100} />
          <Partners />
        </div>
      </div>
      <Footer />
    </>
  );
};
