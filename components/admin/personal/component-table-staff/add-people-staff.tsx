import { respondsStaffs, token } from "@/components/jotai-state/token";
import {
  Stack,
  Flex,
  Modal,
  TextInput,
  Group,
  FileButton,
  Button,
  Text,
  Box,
} from "@mantine/core";
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";

interface IProps {
  title: string;
  setOpen: (open: boolean) => void;
  open: boolean;
  staff?: any;
}

const ApiPut = async (id: string, body: any, token: string) => {
  const NewBody = JSON.stringify(body);
  const apiUrl = `https://swaggerip.azurewebsites.net/api/Staff/${id}`;

  const responseAll = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json-patch+json",
    },
    body: NewBody,
  });

  return responseAll;
};

const ApiPost = async (formData: FormData, token: string) => {
  const apiUrl = `https://swaggerip.azurewebsites.net/api/Staff`;

  const responseAll = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return responseAll;
};

export const AddStaff = ({ title, setOpen, open, staff }: IProps) => {
  const [valueToken] = useAtom(token);
  const [values, setValues] = useState({
    Name: "",
    Surname: "",
    Position: "",
    ImageUrl: "sss",
  });
  const [, setRespondsStaff] = useAtom(respondsStaffs);

  const [file, setFile] = useState<File | null>(null);

  const resetRef = useRef<() => void>(null);

  useEffect(() => {
    if (staff) {
      setValues((prev) => {
        return {
          ...prev,
          Name: staff.Name,
          Surname: staff.Surname,
          Position: staff.Position,
        };
      });
    }
  }, [staff]);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const handlerClose = () => {
    setValues({
      Name: "",
      Surname: "",
      Position: "",
      ImageUrl: "dasdsa",
    });
    setOpen(false);
  };

  const handlerEvent = (e: any) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const OnSubmit = async () => {
    if (staff) {
      const newValue = {
        name: values.Name,
        surname: values.Surname,
        position: values.Position,
        imageUrl: values.ImageUrl,
      };
      const resp = await ApiPut(staff.StaffID, newValue, valueToken.Token);
      if (resp.ok) {
        setRespondsStaff(true);
        handlerClose();
      }
    } else {
      console.log(values);
      const formData = new FormData();

      formData.append("Name", values.Name);
      formData.append("Surname", values.Surname);
      formData.append("Position", values.Position);
      formData.append("ImageUrl", values.ImageUrl);

      const resp = await ApiPost(formData, valueToken.Token);
      if (resp.ok) {
        setRespondsStaff(true);
        handlerClose();
      }
    }
  };

  return (
    <div>
      <Modal opened={open} onClose={handlerClose} title={title}>
        <Stack gap="lg">
          <Flex gap={10} justify={"space-between"}>
            <TextInput
              label="Numele staff-ului"
              name="Name"
              placeholder="Input placeholder"
              maw={350}
              value={values.Name}
              onChange={(e) => handlerEvent(e)}
            />
            <TextInput
              maw={350}
              name="Surname"
              value={values.Surname}
              label="Prenumele staff-ului"
              placeholder="Input placeholder"
              onChange={(e) => handlerEvent(e)}
            />
          </Flex>
          <TextInput
            label="Pozitia staff-ului"
            placeholder="Input placeholder"
            name="Position"
            value={values.Position}
            onChange={(e) => handlerEvent(e)}
          />

          <Group justify="center">
            <FileButton
              resetRef={resetRef}
              onChange={setFile}
              accept="image/png,image/jpeg"
            >
              {(props) => <Button {...props}>Upload image</Button>}
            </FileButton>
            <Button disabled={!file} color="red" onClick={clearFile}>
              Reset
            </Button>
          </Group>
          <Box h={50}>
            {file && (
              <Text size="sm" ta="center" mt="sm">
                Picked file: {file.name}
              </Text>
            )}
          </Box>
        </Stack>
        <Flex justify={"center"}>
          <Button variant="outline" size="sm" w={"100%"} onClick={OnSubmit}>
            {staff ? <>Edit staff</> : <>Create staff</>}
          </Button>
        </Flex>
      </Modal>
    </div>
  );
};
