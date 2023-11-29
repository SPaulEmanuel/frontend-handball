import React from "react";
import { Box, Flex, Image, Text } from "@mantine/core";
import classes from "./style.module.scss";

import { Slash } from "tabler-icons-react";
import { format } from "date-fns";
import Link from "next/link";
import { Navbar } from "../../navbar/navbar";

interface IProps {
  data: INews[];
}
export const News = ({ data }: IProps) => {
  const Thumbnail = ({
    ArticoleID,
    Author,
    Content,
    DatePublished,
    ImageUrl,
    Title,
  }: INews) => {
    const dateObject = new Date(DatePublished);
    return (
      <>
        <Link href={"/"} className={classes.linkStyle}>
          <Box w={328} mx={"auto"}>
            <Image src={ImageUrl} alt="Test" radius="md" />
            <Flex pt={10}>
              <Text c={"#008BF4"}>{Author}</Text>
              <Slash size={22} strokeWidth={1} color={"#989898"} />
              <Text c={"#989898"}> {format(dateObject, "yyyy-MM-dd")}</Text>
            </Flex>
            <Text c={"#151E2D"} fw={700} td="underline">
              {Title}
            </Text>
          </Box>
        </Link>
      </>
    );
  };

  return (
    <>
      <div className={classes.simpleGridStyle}>
        {data.map((item: INews, index: number) => {
          return (
            <div key={index}>
              <Thumbnail
                ArticoleID={item.ArticoleID}
                Author={item.Author}
                Content={item.Content}
                DatePublished={item.DatePublished}
                ImageUrl={item.ImageUrl}
                Title={item.Title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
