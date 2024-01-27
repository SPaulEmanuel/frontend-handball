import { respondsStaffs } from "@/components/jotai-state/token";
import { Button, Modal, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React, { useState } from "react";

interface IProps {
  title: string;
  setOpen: ({
    openModal,
    StaffID,
  }: {
    openModal: boolean;
    StaffID: string;
  }) => void;
  id: string;
  open: boolean;
}

const ApiDelete = async (id: string) => {
  const apiUrl = `https://swaggerip.azurewebsites.net/api/Staff/${id}`;

  const responseAll = await fetch(apiUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json-patch+json",
    },
  });

  return responseAll;
};

export const DeletePopUp = ({ id, title, setOpen, open }: IProps) => {
  const [, setRespondsStaff] = useAtom(respondsStaffs);

  const handlerDelete = async () => {
    const reps = await ApiDelete(id);
    if (reps.ok) {
      setRespondsStaff(true);
      setOpen({ openModal: false, StaffID: "" });
    }
  };

  const handlerClose = () => {
    setOpen({ openModal: false, StaffID: "" });
  };

  return (
    <div>
      <Modal opened={open} onClose={handlerClose} title={title}>
        <Text>Sigur vrei sa stergi staff-ul ?</Text>
        <Button onClick={handlerDelete}>Stergere permanenta</Button>
      </Modal>
    </div>
  );
};
