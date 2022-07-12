import React from "react";
import {
  Flex,
  Stack,
  Text,
  Spacer,
  Box,
  RadioGroup,
  Radio,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

export default function HeroSection() {
  const [value, setValue] = useState("1");
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      height={{ md: "70vh" }}
      alignItems={{ md: "center" }}
      marginX={{ base: 0, sm: 10, md: 15, lg: 20 }}
      color={"white"}
      top={0}
      spacing={{ base: 5, md: 2 }}
    >
      <Stack width={{ md: "50%" }} spacing={8}>
        <Text
          fontWeight={500}
          fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
          lineHeight={1.3}
          align={{ base: "center", md: "left" }}
          mt={{ base: 10, md: 0 }}
        >
          Professional Power Washing Services
        </Text>
        <Text align={{ base: "center", md: "left" }} fontSize={"lg"}>
          Driveways, decks, patios, garages, siding - we make them all look new
          again. Driveways, decks, patios, garages, siding - we make them all
          look new again.
        </Text>
      </Stack>
      <Spacer />
      <Box
        borderRadius={"5"}
        bgColor={"white"}
        width={{ xl: "380px" }}
        color={"black"}
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <Box
          position={"relative"}
          bgColor={"#F4F4F4"}
          top={0}
          borderTopStartRadius={5}
          borderStartEndRadius={5}
          height={16}
          color={"black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={"2xl"} fontWeight={500}>
            Free estimate
          </Text>
        </Box>
        <Stack margin={4} spacing={3}>
          <Input placeholder="Name" size="md" />
          <Input placeholder="Email" size="md" />
          <Stack direction={"row"}>
            <Select placeholder="State">
              <option value="colorado">Colorado</option>
            </Select>
            <Select placeholder="City">
              <option value="Aspen">Aspen</option>
              <option value="Snowmass">Snowmass</option>
              <option value="Basalt">Basalt</option>
              <option value="El Jebel">El Jebel</option>
              <option value="Carbondale">Carbondale</option>
              <option value="Glenwood Springs">Glenwood Springs</option>
              <option value="New Castle">New Castle</option>
              <option value="Silt">Silt</option>
              <option value="Rifle">Rifle</option>
              <option value="Gypsum">Gypsum</option>
              <option value="Eagle">Eagle</option>
              <option value="Edwards">Edwards</option>
            </Select>
          </Stack>
          <Input placeholder="Street" size="md" />
          <Text fontSize={"md"} fontWeight={500}>
            Services needed
          </Text>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="1">Driveway</Radio>
              <Radio value="2">Deck/patio</Radio>
              <Radio value="3">Garage</Radio>
            </Stack>
            <Stack mt={2} direction="row">
              <Radio value="4">Roof</Radio>
              <Radio value="5">Gutters</Radio>
              <Radio value="6">House/siding</Radio>
            </Stack>
          </RadioGroup>
          <Box
            as="button"
            height={10}
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            bgGradient="linear(to-l, #084E81, #087ED6)"
            borderRadius={5}
            color="white"
            _hover={{
              bgGradient: "linear(to-l,#084E81,#48AAF0)",
              transition: "all 0.5s cubic-bezier(.08,.52,.52,1)",
            }}
            _active={{
              transform: "scale(0.98)",
              borderColor: "#51B2AB",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
          >
            <Text fontWeight={500}>Get estimate</Text>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
