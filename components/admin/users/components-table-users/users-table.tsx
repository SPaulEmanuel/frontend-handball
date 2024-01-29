import { Table, Image, Button, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";
import classes from "./style.module.scss";
import { Edit, Trash } from "tabler-icons-react";
import { DeletePopUpUsers } from "@/components/shared/shared-components/delete-pop-up-users";
import { AddUsers } from "./add-users";

interface IProps {
  data: any;
}

export const UsersTable = ({ data }: IProps) => {
  const { colorScheme } = useMantineColorScheme();
  const [open, setOpen] = useState(false);
  const [UsersEdit, setUsersEdit] = useState();
  const [openDeletePop, setOpenDeletePop] = useState({
    openModal: false,
    UsersID: "",
  });

  const handlerDelete = (idUsers: string) => {
    setOpenDeletePop({ UsersID: idUsers, openModal: true });
  };

  const handlerAddUsers = (Users: any) => {
    setUsersEdit(Users);
    setOpen(true);
  };

  const rows = data.map((element: any, index: number) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Image
          src={element.ImageUrl}
          alt="imageusers"
          className={classes.imageUrl}
        />
      </Table.Td>
      <Table.Td>{element.FirstName + " " + element.LastName}</Table.Td>
      <Table.Td>
        <Button variant="transparent" onClick={() => handlerAddUsers(element)}>
          <Edit
            size={30}
            strokeWidth={2}
            color={colorScheme === "light" ? "black" : "white"}
          />
        </Button>
        <Button variant="transparent" onClick={() => handlerDelete(element.Id)}>
          <Trash
            size={30}
            strokeWidth={2}
            color={colorScheme === "light" ? "black" : "white"}
          />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <AddUsers
        open={open}
        setOpen={setOpen}
        title={"Editare User"}
        user={UsersEdit}
      />
      <DeletePopUpUsers
        open={openDeletePop.openModal}
        id={openDeletePop.UsersID}
        setOpen={setOpenDeletePop}
        title={"Sterge Users"}
      />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Imagine Profil</Table.Th>
            <Table.Th>Nume</Table.Th>
            <Table.Th>Actiuni</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
