import { respondsPlayers } from "@/components/jotai-state/token";
import { Button, Modal, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React, { useState } from "react";

interface IProps {
  title: string;
  setOpen: ({
    openModal,
    PlayerID,
  }: {
    openModal: boolean;
    PlayerID: string;
  }) => void;
  id: string;
  open: boolean;
}

const ApiDelete = async (id: string) => {
  const apiUrl = `https://swaggerip.azurewebsites.net/api/Player/${id}`;

  const responseAll = await fetch(apiUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json-patch+json",
    },
  });

  return responseAll;
};

export const DeletePopUp = ({ id, title, setOpen, open }: IProps) => {
  const [, setRespondsPlayers] = useAtom(respondsPlayers);

  const handlerDelete = async () => {
    const reps = await ApiDelete(id);
    if (reps.ok) {
      setRespondsPlayers(true);
      setOpen({ openModal: false, PlayerID: "" });
    }
  };

  const handlerClose = () => {
    setOpen({ openModal: false, PlayerID: "" });
  };

  return (
    <div>
      <Modal opened={open} onClose={handlerClose} title={title}>
        <Text>Sigur vrei sa stergi playerul ?</Text>
        <Button onClick={handlerDelete}>Steregere permanenta</Button>
      </Modal>
    </div>
  );
};
