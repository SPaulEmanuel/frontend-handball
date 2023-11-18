import Header from "@/components/header/header";
import { Box } from "@mantine/core";
import React from "react";
import classes from "./style.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Box bg="#3B496D" className={classes.paddingStyle}>
        <Header />
        {children}
      </Box>
    </section>
  );
}
