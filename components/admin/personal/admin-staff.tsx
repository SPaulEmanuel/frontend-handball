"use client";
import { Button, Box, Space } from "@mantine/core";
import { PlayersPageTable } from "./component-table/personal-page-table";
import { AddStaff } from "@/components/admin/personal/component-table-staff/add-people-staff";
import { useEffect, useState } from "react";
import { respondsStaffs } from "@/components/jotai-state/token-staff";
import { useAtom } from "jotai";
import { StaffsPageTable } from "./component-table-staff/staff-page-table";

async function getStaff() {
  const res = await fetch(
    "https://swaggerip.azurewebsites.net/api/Staff/GetAllInfo"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const AdminStaff = () => {
  const [respondsStaff, setRespondsStaff] = useAtom(respondsStaffs);
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataAPI = await getStaff();
        setData(dataAPI);
      } catch (error) {
        console.error("Eroare la preluarea datelor:", error);
      }
    };
    setRespondsStaff(false);
    fetchData();
  }, [respondsStaff]);

  const handlerAddStaff = () => {
    setOpen(true);
  };

  return (
    <Box px={"lg"}>
      {data !== "" ? (
        <>
          <AddStaff open={open} setOpen={setOpen} title={"Adauga staff"} />
          <Button variant="default" onClick={handlerAddStaff}>
            Adauga staff
          </Button>
          <Space h={30} />
          <Box px={"lg"}>
            <StaffsPageTable data={data} />
          </Box>
        </>
      ) : null}
    </Box>
  );
};
