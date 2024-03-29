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
  Text,
  Image,
  Space,
} from "@mantine/core";
import { Accessible, RubberStamp } from "tabler-icons-react";

interface IProps {
  teamData: any;
  staffData: any;
}

interface IPropsThumbnailPlayer {
  item: any;
}

interface IPropsPlayerShow {
  player: any;
}

export const Team = ({ teamData, staffData }: IProps) => {
  const dates = ["2023/24", "2022/23", "2021/22"];

  const [valueSegmentedControl, setValueSegmentedControl] = useState("players");

  const [selectedItem, setSelectedItem] = useState<string>("2023/24");

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = dates.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  const PlayerShow = ({ player }: IPropsPlayerShow) => {
    return (
      <div className={classes.playerStyle}>
        <Image
          src={player.ImageUrl}
          alt="imagePlayer"
          className={classes.playerImage}
        />
        <Text
          fw={700}
          c={"#013778"}
          className={classes.namePlayer}
          bg={"#c8c8e6"}
        >
          {player.Name} {player.Surname}
        </Text>
      </div>
    );
  };

  const ThumbnailPlayer = ({ item }: IPropsThumbnailPlayer) => {
    return (
      <>
        <Text fz={22} fw={700}>
          {item[0].Position}
        </Text>
        <Space h={71} />
        <Box className={classes.allPlayers}>
          {item.map((player: any, index: number) => {
            return (
              <div key={index}>
                <PlayerShow player={player} />
              </div>
            );
          })}
        </Box>
        <Space h={71} />
      </>
    );
  };

  return (
    <div>
      <div className={classes.central}>
        <SegmentedControl
          value={valueSegmentedControl}
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
          onChange={setValueSegmentedControl}
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
      {valueSegmentedControl === "players" ? (
        <>
          {teamData.map((item: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <ThumbnailPlayer item={item} />
              </React.Fragment>
            );
          })}
        </>
      ) : null}

      {valueSegmentedControl === "staff" ? (
        <>
          {staffData.map((item: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <ThumbnailPlayer item={item} />
              </React.Fragment>
            );
          })}
        </>
      ) : null}
    </div>
  );
};
