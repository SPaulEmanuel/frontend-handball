import { respondsUsers } from "@/components/jotai-state/token";
import { Button, Modal, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";

interface IProps {
  title: string;
  setOpen: ({
    openModal,
    UsersID,
  }: {
    openModal: boolean;
    UsersID: string;
  }) => void;
  id: string;
  open: boolean;
}

const ApiDelete = async (id: string) => {
  const apiUrl = `https://swaggerip.azurewebsites.net/api/Users/${id}`;

  const responseAll = await fetch(apiUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json-patch+json",
    },
  });

  return responseAll;
};

export const DeletePopUpUsers = ({ id, title, setOpen, open }: IProps) => {
  const [, setRespondsUsers] = useAtom(respondsUsers);

  const handlerDelete = async () => {
    const reps = await ApiDelete(id);
    if (reps.ok) {
      setRespondsUsers(true);
      setOpen({ openModal: false, UsersID: "" });
    }
  };

  const handlerClose = () => {
    setOpen({ openModal: false, UsersID: "" });
  };

  return (
    <div>
      <Modal opened={open} onClose={handlerClose} title={title}>
        <Text>Sigur vrei sa stergi Users-ul ?</Text>
        <Button onClick={handlerDelete}>Stergere permanenta</Button>
      </Modal>
    </div>
  );
};
