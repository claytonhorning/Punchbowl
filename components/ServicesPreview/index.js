import React from "react";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function ServicePreview({
  title,
  source,
  description,
  reverse,
}) {
  return (
    <Flex
      justifyContent={"space-between"}
      direction={{
        base: "column",
        lg: reverse ? "row-reverse" : "row",
      }}
      height={{ lg: "350px" }}
      mt={{ base: 10, lg: 20 }}
    >
      <Stack
        alignSelf={"center"}
        width={{ base: "100%", lg: "50%" }}
        ml={{ lg: reverse ? 16 : 0 }}
        mr={{ lg: !reverse ? 16 : 0 }}
      >
        <Text fontWeight={600} fontSize={"3xl"}>
          {title}
        </Text>
        <Text pb={3} fontSize={"md"}>
          {description}
        </Text>
        <Button
          _hover={{
            bg: "#2971D3",
            color: "white",
            transition: "all 0.5s cubic-bezier(.08,.52,.52,1)",
          }}
          bg={"#012D69"}
          color={"white"}
          width={32}
        >
          Read more
        </Button>
      </Stack>
      <Box
        width={{ base: "100%", lg: "50%" }}
        minHeight={250}
        position={"relative"}
        mt={{ base: 8, lg: 0 }}
      >
        <Image src={source} layout="fill" objectFit="cover" />
      </Box>
    </Flex>
  );
}
