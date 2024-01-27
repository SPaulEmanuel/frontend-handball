"use client";
import { Button, Box, Space } from "@mantine/core";
import { PlayersPageTable } from "./component-table/personal-page-table";
import { AddPeople } from "@/components/admin/jucatori/component-table/add-people";
import { useEffect, useState } from "react";
import { respondsPlayers } from "@/components/jotai-state/token";
import { useAtom } from "jotai";

async function getPersonal() {
  const res = await fetch(
    "https://swaggerip.azurewebsites.net/api/Player/GetAllInfo"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const AdminJucatori = () => {
  const [respondsPlayer, setRespondsPlayer] = useAtom(respondsPlayers);
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataAPI = await getPersonal();
        setData(dataAPI);
      } catch (error) {
        console.error("Eroare la preluarea datelor:", error);
      }
    };
    setRespondsPlayer(false);
    fetchData();
  }, [respondsPlayer]);

  const handlerAddPeople = () => {
    setOpen(true);
  };

  return (
    <Box px={"lg"}>
      {data !== "" ? (
        <>
          <AddPeople open={open} setOpen={setOpen} title={"Adauga Playeri"} />
          <Button variant="default" onClick={handlerAddPeople}>
            Adauga jucatori
          </Button>
          <Space h={30} />
          <Box px={"lg"}>
            <PlayersPageTable data={data} />
          </Box>
        </>
      ) : null}
    </Box>
  );
};
