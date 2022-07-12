import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";

export default function MeetTeam() {
  return (
    <Box marginX={{ base: 0, md: 15, lg: 20 }} marginY={10}>
      <Text fontWeight={"700"} align={"center"} fontSize={"4xl"}>
        Our Team
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={16}
        mt={10}
        justifyContent={"center"}
      >
        <Stack alignItems={"center"}>
          <Box width={300} minHeight={400} position={"relative"}>
            <Image src={"/alexander.jpg"} layout="fill" objectFit="cover" />
          </Box>
          <Text pt={4} fontWeight={500} fontSize={"3xl"}>
            Jorge Sandoval
          </Text>
          <Text
            align={{ base: "center", md: "left" }}
            width={{ base: "100%", md: 320, lg: 420, xl: 480 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            vulputate dui. Ut vel congue nibh. Mauris malesuada dictum massa.
            Donec efficitur nulla sapien, ut suscipit est blandit sed. Ut sed
            efficitur tortor. Phasellus vulputate sed justo non hendrerit.
          </Text>
        </Stack>
        <Stack alignItems={"center"}>
          <Box width={300} minHeight={400} position={"relative"}>
            <Image src={"/alexander.jpg"} layout="fill" objectFit="cover" />
          </Box>
          <Text pt={4} fontWeight={500} fontSize={"3xl"}>
            Clayton Horning
          </Text>
          <Text
            align={{ base: "center", md: "left" }}
            width={{ base: "100%", md: 320, lg: 420, xl: 480 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            vulputate dui. Ut vel congue nibh. Mauris malesuada dictum massa.
            Donec efficitur nulla sapien, ut suscipit est blandit sed. Ut sed
            efficitur tortor. Phasellus vulputate sed justo non hendrerit.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
