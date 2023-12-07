"use client";

import React from "react";
import { LandingPage } from "@/components/landing-page/landing-page";

async function getData() {
  const res = await fetch(
    "https://swaggerip.azurewebsites.net/api/Articole/GetAll"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getDataImageTeam() {
  const res = await fetch("https://swaggerip.azurewebsites.net/api/images");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getPlayers() {
  const res = await fetch(
    "https://swaggerip.azurewebsites.net/api/Player/GetPlayersByPosition"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  const imageTeam = await getDataImageTeam();

  const teamPlayers = await getPlayers();

  return (
    <>
      <LandingPage
        data={data}
        imageTeam={imageTeam}
        teamPlayers={teamPlayers}
      />
    </>
  );
}
