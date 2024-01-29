import { respondsUsers, token } from "@/components/jotai-state/token";
import {
  Box,
  Button,
  FileButton,
  Flex,
  Group,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { id } from "date-fns/locale";
import { useAtom } from "jotai";
import React, { useRef, useState } from "react";

const ApiPut = async (id: string, body: any, token: string) => {
  const NewBody = JSON.stringify(body);
  const apiUrl = `https://swaggerip.azurewebsites.net/api/Users/${id}`;

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

const ApiPost = async (data: any, token: string) => {
  const apiUrl = `https://swaggerip.azurewebsites.net/Users`;

  const body = JSON.stringify(data);

  const responseAll = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json-patch+json",
    },

    body: body,
  });

  return responseAll;
};

interface IProps {
  title: string;
  setOpen: (open: boolean) => void;
  open: boolean;
  user?: any;
}

export const AddUsers = ({ title, setOpen, open, user }: IProps) => {
  const [valueToken] = useAtom(token);
  const [values, setValues] = useState({
    firstName: "",

    lastName: "",

    username: "",

    password: "",

    userType: "",

    imageUrl:
      "https://ipstorage1989.blob.core.windows.net/ipcontainer/Stefan.png",
  });

  const [, setRespondsPlayer] = useAtom(respondsUsers);

  const [file, setFile] = useState<File | null>(null);

  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const handlerClose = () => {
    setValues({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      userType: "",
      imageUrl: "",
    });
    setOpen(false);
  };

  const handlerEvent = (e: any) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlerEventNumber = (e: any, name: string) => {
    setValues((prev) => {
      return { ...prev, [name]: e };
    });
  };
  /*
  const OnSubmit = async () => {
    const resp = await ApiPost(values, valueToken.Token);
    if (resp.ok) {
      setRespondsPlayer(true);
      handlerClose();
    }
  };
*/
  const OnSubmit = async () => {
    if (user) {
      const newValue = {
        name: values.firstName,
        surname: values.lastName,
        username: values.username,
        password: values.password,
        userType: values.userType,
        imageUrl: values.imageUrl,
      };
      const resp = await ApiPut(user.UsersID, newValue, valueToken.Token);
      if (resp.ok) {
        setRespondsPlayer(true);
        handlerClose();
      }
    } else {
      const formData = new FormData();

      formData.append("Name", values.firstName);
      formData.append("Surname", values.lastName);
      formData.append("Username", values.username);
      formData.append("Password", values.password);
      formData.append("User Type", values.userType);
      formData.append("ImageUrl", values.imageUrl);

      const resp = await ApiPost(values, valueToken.Token);
      if (resp.ok) {
        setRespondsPlayer(true);
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
              label="Nume user"
              name="firstName"
              placeholder="Input placeholder"
              maw={350}
              value={values.firstName}
              onChange={(e) => handlerEvent(e)}
            />
            <TextInput
              maw={350}
              name="lastName"
              value={values.lastName}
              label="Prenumele user"
              placeholder="Input placeholder"
              onChange={(e) => handlerEvent(e)}
            />
          </Flex>

          <TextInput
            name="username"
            value={values.username}
            label="UserName"
            placeholder="Input placeholder"
            onChange={(e) => handlerEvent(e)}
          />

          <TextInput
            name="userType"
            value={values.userType}
            label="User Type"
            placeholder="Input placeholder"
            onChange={(e) => handlerEvent(e)}
          />

          <PasswordInput
            label="Parola user"
            placeholder="Input placeholder"
            name="password"
            value={values.password}
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
            {user ? <>Edit user</> : <>Create user</>}
          </Button>
        </Flex>
      </Modal>
    </div>
  );
};
