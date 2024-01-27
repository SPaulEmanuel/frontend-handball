import { Button, Image, useMantineColorScheme } from "@mantine/core";
import { Table } from "@mantine/core";
import classes from "./style.module.scss";
import { Trash } from "tabler-icons-react";
import { Edit } from "tabler-icons-react";
import { useState } from "react";
import { DeletePopUp } from "@/components/shared/shared-components/delete-pop-up-staff";
import { AddStaff } from "./add-people-staff";

interface IProps {
  data: any;
}

export const StaffsPageTable = ({ data }: IProps) => {
  const { colorScheme } = useMantineColorScheme();
  const [open, setOpen] = useState(false);
  const [staffEdit, setStaffEdit] = useState();
  const [openDeletePop, setOpenDeletePop] = useState({
    openModal: false,
    StaffID: "",
  });

  const handlerDelete = (idStaff: string) => {
    setOpenDeletePop({ StaffID: idStaff, openModal: true });
  };

  const handlerAddStaff = (staff: any) => {
    setStaffEdit(staff);
    setOpen(true);
  };

  const rows = data.map((element: any, index: number) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Image
          src={element.ImageUrl}
          alt="imageStaff"
          className={classes.imageUrl}
        />
      </Table.Td>
      <Table.Td>{element.Name + " " + element.Surname}</Table.Td>
      <Table.Td>{element.Position}</Table.Td>
      <Table.Td>
        <Button variant="transparent" onClick={() => handlerAddStaff(element)}>
          <Edit
            size={30}
            strokeWidth={2}
            color={colorScheme === "light" ? "black" : "white"}
          />
        </Button>
        <Button
          variant="transparent"
          onClick={() => handlerDelete(element.StaffID)}
        >
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
      <AddStaff
        open={open}
        setOpen={setOpen}
        title={"Editare Staff"}
        staff={staffEdit}
      />
      <DeletePopUp
        open={openDeletePop.openModal}
        id={openDeletePop.StaffID}
        setOpen={setOpenDeletePop}
        title={"Sterge staff"}
      />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Imagine Profil</Table.Th>
            <Table.Th>Nume</Table.Th>
            <Table.Th>Pozitie</Table.Th>
            <Table.Th>Actiuni</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
