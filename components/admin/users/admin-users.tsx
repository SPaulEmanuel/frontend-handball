"use client";
import { respondsUsers, token } from "@/components/jotai-state/token";
import { Box, Button, Space } from "@mantine/core";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { UsersTable } from "./components-table-users/users-table";
import { AddUsers } from "./components-table-users/add-users";

async function getUsers() {
  const res = await fetch("https://swaggerip.azurewebsites.net/Users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const AdminUsers = () => {
  const [valueToken] = useAtom(token);
  const [respondsUser, setRespondsUser] = useAtom(respondsUsers);
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataAPI = await getUsers();
        setData(dataAPI);
      } catch (error) {
        console.error("Eroare la preluarea datelor:", error);
      }
    };
    setRespondsUser(false);
    fetchData();
  }, [respondsUser, valueToken]);

  const handlerAddStaff = () => {
    setOpen(true);
  };

  return (
    <Box px={"lg"}>
      {data !== "" ? (
        <>
          <AddUsers open={open} setOpen={setOpen} title={"Adauga users"} />
          <Button variant="default" onClick={handlerAddStaff}>
            Adauga users
          </Button>
          <Space h={30} />
          <Box px={"lg"}>
            <UsersTable data={data} />
          </Box>
        </>
      ) : null}
    </Box>
  );
};
