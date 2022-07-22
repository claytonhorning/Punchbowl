import React from "react";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import Layout from "../Layout";
import Image from "next/image";
import styles from "../../styles/service.module.css";
import SliderImage from "../SliderImage";

export default function Service({
  hero,
  img1,
  img2,
  header1,
  text1,
  header2,
  text2,
  header3,
  text3,
  header4,
  text4,
}) {
  return (
    <Layout title="Decks & Patios">
      <Box
        bgColor={"black"}
        position={"absolute"}
        top={0}
        zIndex={"-1"}
        width={"100%"}
        height={{ base: "95vh", md: "35vh" }}
      >
        <Image
          src={"/deck2.jpg"}
          layout="fill"
          objectFit="cover"
          className={styles.heroImg}
        />
      </Box>
      <Stack height={"35vh"} color={"white"} pt={6} alignItems={"center"}>
        <Text fontWeight={500} fontSize={"5xl"}>
          Driveways
        </Text>
        <Text>Starts at</Text>
        <Box bg={"#084E81"} paddingX={10} paddingY={1} borderRadius={30}>
          <Text fontWeight={500} fontSize={"xl"}>
            $100
          </Text>
        </Box>
      </Stack>
      <Container maxW={"1500px"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box width={"40%"}>
            <SliderImage before={"/deck.jpg"} after={"/deck2.jpg"} />
            <Text mt={2} fontWeight={500} fontSize={"xl"}>
              Driveway in Carbondale, CO
            </Text>
          </Box>
          <Box>hello</Box>
        </Stack>
      </Container>
    </Layout>
  );
}
