import { respondsUsers, token } from "@/components/jotai-state/token";
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

const ApiDelete = async (id: string, token: string) => {
  console.log(token);
  const apiUrl = `https://swaggerip.azurewebsites.net/Users/${id}`;

  const responseAll = await fetch(apiUrl, {
    method: "DELETE",
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return responseAll;
};

export const DeletePopUpUsers = ({ id, title, setOpen, open }: IProps) => {
  const [tokenValue] = useAtom(token);
  const [, setRespondsUsers] = useAtom(respondsUsers);

  const handlerDelete = async () => {
    const reps = await ApiDelete(id, tokenValue.Token);
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
