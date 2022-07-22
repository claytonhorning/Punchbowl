import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";

export default function MeetTeam() {
  return (
    <Box
      marginX={{ base: 0, md: 15, lg: 20 }}
      marginBottom={{ base: 20 }}
      marginTop={10}
    >
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
            <Image
              src={"/team/jorge-headshot.JPG"}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Text pt={4} fontWeight={500} fontSize={"3xl"}>
            Jorge Sandoval
          </Text>
          <Text
            align={{ base: "center", md: "left" }}
            width={{ base: "100%", md: 320, lg: 420, xl: 480 }}
          >
            I&apos;m Jorge, a jack of all trades and a car enthusiast. I&apos;ve
            been living in the Roaring Fork Valley for 20+ years and have built
            a reputation doing property management. I enjoy taking ownership of
            a task and completing it to the best of my ability. Pressure Washing
            is one of the best ways to improve the look and feel of your home
            and I enjoy delivering great results to our clients.
          </Text>
        </Stack>
        <Stack alignItems={"center"}>
          <Box width={300} minHeight={400} position={"relative"}>
            <Image
              src={"/team/clayton-headshot.JPG"}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Text pt={4} fontWeight={500} fontSize={"3xl"}>
            Clayton Horning
          </Text>
          <Text
            align={{ base: "center", md: "left" }}
            width={{ base: "100%", md: 320, lg: 420, xl: 480 }}
          >
            I&apos;m Clayton, a recent business graduate of the University of
            Colorado Boulder. After I graduated, I realized that I missed
            working outside in the Roaring Fork Valley so I moved back and
            started Punchbowl Pressure Washing with my former co-worker Jorge. I
            enjoy pressure washing because we get to see huge results in the
            spaces we clean and make clients happy.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
