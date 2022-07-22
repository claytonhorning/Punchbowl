import React from "react";
import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import { MdFavorite } from "@react-icons/all-files/md/MdFavorite";
import { MdAssignment } from "@react-icons/all-files/md/MdAssignment";
import { MdTerrain } from "@react-icons/all-files/md/MdTerrain";
import { RiMoneyDollarCircleFill } from "@react-icons/all-files/ri/RiMoneyDollarCircleFill";

export default function Banner() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bg={"#E3F2FF"}
      height={230}
      fontSize={{ base: 50, md: 70, lg: 80 }}
      flexWrap={"wrap"}
    >
      <Stack alignItems={"center"}>
        <MdFavorite fontSize={"inherit"} color={"#012D69"} />
        <Text
          maxW={200}
          align={"center"}
          fontWeight={600}
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
        >
          Satisfaction Guarenteed
        </Text>
      </Stack>
      <Stack alignItems={"center"}>
        <MdAssignment fontSize={"inherit"} color={"#012D69"} />
        <Text
          maxW={200}
          align={"center"}
          fontWeight={600}
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
        >
          Fast & Free Estimates
        </Text>
      </Stack>

      <Stack alignItems={"center"}>
        <MdTerrain fontSize={"inherit"} color={"#012D69"} />
        <Text
          maxW={200}
          align={"center"}
          fontWeight={600}
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
        >
          Environmentally Conscious
        </Text>
      </Stack>
      <Stack alignItems={"center"}>
        <RiMoneyDollarCircleFill fontSize={"inherit"} color={"#012D69"} />
        <Text
          maxW={200}
          align={"center"}
          fontWeight={600}
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
        >
          Affordable Services
        </Text>
      </Stack>
    </Stack>
  );
}
