"use client";

import { Menu } from "@/components/landing-page/menu/menu";
import { SkeletonTeamPresentation } from "@/components/landing-page/team-presentation/skeleton-page";

import { Space } from "@mantine/core";
import React from "react";
import classes from "./style.module.scss";
import { News } from "@/components/landing-page/main-page/news/news";
import { Footer } from "@/components/landing-page/footer/footer";
import { Partners } from "@/components/landing-page/partners/partners";
import { Navbar } from "@/components/landing-page/navbar/navbar";

async function getData() {
  const res = await fetch(
    "https://swaggerip.azurewebsites.net/api/Articole/GetAll"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <div className={classes.bodyStyle}>
        <Menu />
        <div className={classes.boxStyle}>
          <SkeletonTeamPresentation />
          <Navbar />
          <Space h={100} />
          <News data={data} />
          <Space h={100} />
          <Partners />
        </div>
      </div>
      <Footer />
    </>
  );
}
