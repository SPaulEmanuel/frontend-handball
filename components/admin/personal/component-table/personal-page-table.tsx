import { Button, Image } from "@mantine/core";
import { Table } from "@mantine/core";
import classes from "./style.module.scss";
import { Trash } from "tabler-icons-react";
import { Edit } from "tabler-icons-react";
import { useState } from "react";
import { DeletePopUp } from "@/components/shared/shared-components/delete-pop-up";

interface IProps {
  data: any;
}

export const PlayersPageTable = ({ data }: IProps) => {
  const [openDeletePop, setOpenDeletePop] = useState({
    openModal: false,
    PlayerID: "",
  });

  const handlerDelete = (idPlayer: string) => {
    setOpenDeletePop({ PlayerID: idPlayer, openModal: true });
  };

  const rows = data.map((element: any, index: number) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Image
          src={element.ImageUrl}
          alt="imagePlayer"
          className={classes.imageUrl}
        />
      </Table.Td>
      <Table.Td>{element.Name + " " + element.Surname}</Table.Td>
      <Table.Td>{element.Position}</Table.Td>
      <Table.Td>{element.GoalsScored}</Table.Td>
      <Table.Td>{element.JerseyNumber}</Table.Td>
      <Table.Td>
        <Button variant="transparent">
          <Edit size={30} strokeWidth={2} color={"white"} />
        </Button>
        <Button
          variant="transparent"
          onClick={() => handlerDelete(element.PlayerID)}
        >
          <Trash size={30} strokeWidth={2} color={"white"} />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <DeletePopUp
        open={openDeletePop.openModal}
        id={openDeletePop.PlayerID}
        setOpen={setOpenDeletePop}
        title={"Sterge player"}
      />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Imagine Profil</Table.Th>
            <Table.Th>Nume</Table.Th>
            <Table.Th>Pozitie</Table.Th>
            <Table.Th>Goluri marcate</Table.Th>
            <Table.Th>Numar tricou</Table.Th>
            <Table.Th>Actiuni</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
