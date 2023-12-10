"use client";
import React, { useState } from "react";
import classes from "./style.module.scss";
import { useRouter } from "next/navigation";

interface IProps {
  chooseView: (value: string) => void;
}
export const Navbar = ({ chooseView }: IProps) => {
  const route = useRouter();
  const [choose, useChoose] = useState("news");

  const handlerClickEvent = (value: string) => {
    useChoose(value);
    chooseView(value);
  };

  return (
    <div className={classes.overflowAuto}>
      <div className={classes.position}>
        <div className={classes.direction}>
          <h3
            className={`${choose === "news" ? classes.pointCursor : ""} ${
              classes.point
            }`}
            onClick={() => handlerClickEvent("news")}
          >
            STIRI
          </h3>
          <h3
            className={`${choose === "team" ? classes.pointCursor : ""} ${
              classes.point
            }`}
            onClick={() => handlerClickEvent("team")}
          >
            ECHIPA
          </h3>
          <h3
            className={`${choose === "mach" ? classes.pointCursor : ""} ${
              classes.point
            }`}
            onClick={() => handlerClickEvent("mach")}
          >
            MECIURI SI REZULTATE
          </h3>
          <h3
            className={`${choose === "classment" ? classes.pointCursor : ""} ${
              classes.point
            }`}
            onClick={() => handlerClickEvent("classment")}
          >
            CLASAMENT
          </h3>
          <h3
            className={`${choose === "reword" ? classes.pointCursor : ""} ${
              classes.point
            }`}
            onClick={() => handlerClickEvent("reword")}
          >
            PREMII SI MEDALII
          </h3>
        </div>
      </div>
    </div>
  );
};
