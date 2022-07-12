import {
  Box,
  UnorderedList,
  ListItem,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export default function ServiceAreas() {
  return (
    <Box paddingY={{ md: 15 }}>
      <Text mb={5} fontWeight={"700"} align={"center"} fontSize={"4xl"}>
        Service Areas
      </Text>
      <Flex justifyContent={"center"}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          color={"#0087DB"}
          width={{ base: "400px", md: "700px" }}
          flexWrap={"wrap"}
          spacing={10}
          mb={8}
        >
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Snowmass
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Aspen
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Basalt
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            El Jebel
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Carbondale
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Glenwood Springs
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            New Castle
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Rifle
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Silt
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Gypsum
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Eagle
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            display={"list-item"}
          >
            Edwards
          </Text>
        </Stack>
      </Flex>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d263960.92625307123!2d-107.27472163862781!3d39.45933004471194!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1657654220233!5m2!1sen!2sus"
        width="100%"
        height="450"
      ></iframe>
    </Box>
  );
}
