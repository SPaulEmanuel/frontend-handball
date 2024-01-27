import { Table, Image } from "@mantine/core";
import React from "react";
import classes from "./style.module.scss";

interface IProps {
  data: any;
}

export const UsersTable = ({ data }: IProps) => {
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
    </Table.Tr>
  ));

  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Imagine Profil</Table.Th>
            <Table.Th>Nume</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
