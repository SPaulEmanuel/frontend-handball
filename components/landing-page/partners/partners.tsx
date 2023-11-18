import React from "react";

import NextImage from "next/image";
import { Flex, Image } from "@mantine/core";
import classes from "./style.module.css";

import SuceavaLogo from "@/public/logo-icon/SuceavaLogo.png";
import CelestinLogo from "@/public/logo-icon/CelestinLogo.png";
import FitermanPharmaLogo from "@/public/logo-icon/FitermanPharmaLogo.png";
import IuliusmallLogo from "@/public/logo-icon/IuliusmallLogo.png";
import PepeneroLogo from "@/public/logo-icon/PepeneroLogo.png";
import MihuLogoMihuLogo from "@/public/logo-icon/MihuLogo.png";
import USVLogo from "@/public/logo-icon/USVLogo.png";
import VivendiLogo from "@/public/logo-icon/VivendiLogo.png";

export const Partners = () => {
  return (
    <>
      <Flex wrap="wrap" gap={80}>
        <Image
          component={NextImage}
          src={SuceavaLogo}
          alt="SuceavaLogo"
          width={369}
          height={109}
        />
        <Image
          component={NextImage}
          src={USVLogo}
          alt="USVLogo"
          width={284}
          height={84}
        />
        <Image
          component={NextImage}
          src={FitermanPharmaLogo}
          alt="FitermanPharmaLogo"
          width={123}
          height={67}
        />
        <Image
          component={NextImage}
          src={PepeneroLogo}
          alt="PepeneroLogo"
          width={339}
          height={115}
          className={classes.firstStyle}
        />
        <Image
          component={NextImage}
          src={CelestinLogo}
          alt="CelestinLogo"
          width={214}
          height={199}
          className={classes.secondStyle}
        />
        <Image
          component={NextImage}
          src={VivendiLogo}
          alt="VivendiLogo"
          width={225}
          height={225}
          className={classes.secondStyle}
        />
        <Image
          component={NextImage}
          src={IuliusmallLogo}
          alt="IuliusmallLogo"
          width={98}
          height={124}
        />
        <Image
          component={NextImage}
          src={MihuLogoMihuLogo}
          alt="MihuLogoMihuLogo"
          width={225}
          height={225}
          className={classes.lastStyle}
        />
      </Flex>
    </>
  );
};
