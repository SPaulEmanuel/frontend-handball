import React, { useState } from "react";
import classes from "./style.module.scss";

import {
  Center,
  SegmentedControl,
  Box,
  rem,
  Combobox,
  Button,
  useCombobox,
} from "@mantine/core";
import { Accessible, RubberStamp } from "tabler-icons-react";

interface IProps {
  teamData: any;
}
export const Team = ({}: IProps) => {
  const dates = ["2023/24", "2022/23", "2021/22"];

  const [selectedItem, setSelectedItem] = useState<string>("2023/24");

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = dates.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <div>
      <div className={classes.central}>
        <SegmentedControl
          classNames={{
            label: classes.label,
          }}
          bg={"#F4F4F4"}
          data={[
            {
              value: "players",
              label: (
                <Center>
                  <RubberStamp style={{ width: rem(16), height: rem(16) }} />
                  <Box ml={10}>Jucători</Box>
                </Center>
              ),
            },
            {
              value: "staff",
              label: (
                <Center>
                  <Accessible style={{ width: rem(16), height: rem(16) }} />
                  <Box ml={10}>Personal</Box>
                </Center>
              ),
            },
          ]}
        />
        <Combobox
          store={combobox}
          width={250}
          position="bottom-start"
          withArrow
          onOptionSubmit={(val) => {
            setSelectedItem(val);
            combobox.closeDropdown();
          }}
        >
          <Combobox.Target>
            <Button onClick={() => combobox.toggleDropdown()} bg={"#2c2e33"}>
              {selectedItem}
            </Button>
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>{options}</Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </div>
    </div>
  );
};
