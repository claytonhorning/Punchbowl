import { Grid, GridItem, Stack, Text, Spacer, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function ReviewsSection() {
  return (
    <Flex
      display={"flex"}
      justifyContent={{ base: "center", "2xl": "space-between" }}
      flexWrap={"wrap"}
      gap={8}
      marginX={{ base: 0, md: 15, lg: 20 }}
      marginY={{ base: 20, md: 8, lg: 12 }}
    >
      <Stack
        bg={"white"}
        borderColor={"#7BC4E8"}
        borderWidth={2}
        borderRadius={10}
        paddingX={4}
        paddingY={2}
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        width={{ base: "100%", md: "380px" }}
      >
        <Text>
          Punchbowl pressure washing came to our house and did an amazing job on
          our patio. Highly recommend them!
        </Text>
        <Flex>
          <Stack direction={"row"}>
            <Text fontWeight={600}>Susan L.</Text>
          </Stack>
          <Spacer />
          <Stack direction={"row"}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={"#FED143"} />
              ))}
          </Stack>
        </Flex>
      </Stack>

      <Stack
        bg={"white"}
        borderColor={"#7BC4E8"}
        borderWidth={2}
        borderRadius={10}
        paddingX={4}
        paddingY={2}
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        width={{ base: "100%", md: "380px" }}
      >
        <Text>
          Punchbowl pressure washing came to our house and did an amazing job on
          our patio. Highly recommend them!
        </Text>
        <Flex>
          <Stack direction={"row"}>
            <Text fontWeight={600}>Susan L.</Text>
          </Stack>
          <Spacer />
          <Stack direction={"row"}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={"#FED143"} />
              ))}
          </Stack>
        </Flex>
      </Stack>

      <Stack
        bg={"white"}
        borderColor={"#7BC4E8"}
        borderWidth={2}
        borderRadius={10}
        paddingX={4}
        paddingY={2}
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        width={{ base: "100%", md: "380px" }}
      >
        <Text>
          Punchbowl pressure washing came to our house and did an amazing job on
          our patio. Highly recommend them!
        </Text>
        <Flex>
          <Stack direction={"row"}>
            <Text fontWeight={600}>Susan L.</Text>
          </Stack>
          <Spacer />
          <Stack direction={"row"}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={"#FED143"} />
              ))}
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
