import { respondsPlayers, token } from "@/components/jotai-state/token";
import {
  Stack,
  Flex,
  Modal,
  NumberInput,
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
  player?: any;
}

const ApiPut = async (id: string, body: any, token: string) => {
  const NewBody = JSON.stringify(body);
  const apiUrl = `https://swaggerip.azurewebsites.net/api/Player/${id}`;

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
  const apiUrl = `https://swaggerip.azurewebsites.net/api/Player`;

  const responseAll = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return responseAll;
};

export const AddPeople = ({ title, setOpen, open, player }: IProps) => {
  const [valueToken] = useAtom(token);
  const [values, setValues] = useState({
    Name: "",
    Surname: "",
    Age: 0,
    Position: "",
    JerseyNumber: 0,
    GoalsScored: 0,
    ImageUrl:
      "https://ipstorage1989.blob.core.windows.net/ipcontainer/Smocot.png",
  });
  const [, setRespondsPlayer] = useAtom(respondsPlayers);

  const [file, setFile] = useState<File | null>(null);

  const resetRef = useRef<() => void>(null);

  useEffect(() => {
    if (player) {
      setValues((prev) => {
        return {
          ...prev,
          Name: player.Name,
          Surname: player.Surname,
          Age: player.Age,
          Position: player.Position,
          JerseyNumber: player.JerseyNumber,
          GoalsScored: player.GoalsScored,
        };
      });
    }
  }, [player]);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const handlerClose = () => {
    setValues({
      Name: "",
      Surname: "",
      Age: 0,
      Position: "",
      JerseyNumber: 0,
      GoalsScored: 0,
      ImageUrl: "",
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

  const OnSubmit = async () => {
    if (player) {
      const newValue = {
        name: values.Name,
        surname: values.Surname,
        age: values.Age,
        position: values.Position,
        jerseyNumber: values.JerseyNumber,
        goalsScored: values.GoalsScored,
        imageUrl: values.ImageUrl,
      };
      const resp = await ApiPut(player.PlayerID, newValue, valueToken.Token);
      if (resp.ok) {
        setRespondsPlayer(true);
        handlerClose();
      }
    } else {
      const formData = new FormData();

      formData.append("Name", values.Name);
      formData.append("Surname", values.Surname);
      formData.append("Age", values.Age.toString());
      formData.append("Position", values.Position);
      formData.append("JerseyNumber", values.JerseyNumber.toString());
      formData.append("GoalsScored", values.GoalsScored.toString());
      formData.append("ImageUrl", values.ImageUrl);

      const resp = await ApiPost(formData, valueToken.Token);
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
              label="Nume jucatorului"
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
              label="Prenumele jucatorului"
              placeholder="Input placeholder"
              onChange={(e) => handlerEvent(e)}
            />
          </Flex>
          <NumberInput
            label="Varsta"
            placeholder="Input placeholder"
            value={values.Age}
            onChange={(e) => handlerEventNumber(e, "Age")}
          />
          <TextInput
            label="Pozitia jucatorului"
            placeholder="Input placeholder"
            name="Position"
            value={values.Position}
            onChange={(e) => handlerEvent(e)}
          />
          <NumberInput
            label="Numarul tricoului"
            placeholder="Input placeholder"
            value={values.JerseyNumber}
            onChange={(e) => handlerEventNumber(e, "JerseyNumber")}
          />
          <NumberInput
            label="Golurile marcate"
            placeholder="Input placeholder"
            value={values.GoalsScored}
            onChange={(e) => handlerEventNumber(e, "GoalsScored")}
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
            {player ? <>Edit player</> : <>Create player</>}
          </Button>
        </Flex>
      </Modal>
    </div>
  );
};
