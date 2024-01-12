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
import React, { useRef, useState } from "react";

interface IProps {
  title: string;
  setOpen: (open: boolean) => void;
  open: boolean;
}
export const AddPeople = ({ title, setOpen, open }: IProps) => {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  const handlerClose = () => {
    setOpen(false);
  };

  const OnSubmit = () => {};
  return (
    <div>
      <Modal opened={open} onClose={handlerClose} title={title}>
        <Stack gap="lg">
          <Flex gap={10} justify={"space-between"}>
            <TextInput
              label="Nume jucatorului"
              placeholder="Input placeholder"
              maw={350}
            />
            <TextInput
              maw={350}
              label="Prenumele jucatorului"
              placeholder="Input placeholder"
            />
          </Flex>
          <NumberInput label="Varsta" placeholder="Input placeholder" />
          <TextInput
            label="Pozitia jucatorului"
            placeholder="Input placeholder"
          />
          <NumberInput
            label="Numarul tricoului"
            placeholder="Input placeholder"
          />
          <NumberInput
            label="Golurile marcate"
            placeholder="Input placeholder"
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
          <Button variant="outline" size="sm" w={"100%"}>
            Create
          </Button>
        </Flex>
      </Modal>
    </div>
  );
};
