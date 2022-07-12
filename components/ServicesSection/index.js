import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ServicePreview from "./servicePreview";

export default function ServicesSection() {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu vulputate dui. Ut vel congue nibh. Mauris malesuada dictum massa. Donec efficitur nulla sapien, ut suscipit est blandit sed. Ut sed efficitur tortor. Phasellus vulputate sed justo non hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu vulputate dui. Ut vel congue nibh. Mauris malesuada dictum massa. Donec efficitur nulla sapien, ut suscipit est blandit sed. Ut sed efficitur tortor. Phasellus vulputate sed justo non hendrerit something else.";
  return (
    <Box marginX={{ base: 0, md: 15, lg: 20 }} marginY={10}>
      <Text fontWeight={"700"} align={"center"} fontSize={"4xl"}>
        Our Services
      </Text>
      <ServicePreview
        title={"Decks/Patios"}
        source={"/deck.jpg"}
        description={desc}
      />
      <ServicePreview
        title={"Decks/Patios"}
        source={"/deck.jpg"}
        description={desc}
        reverse
      />
      <ServicePreview
        title={"Decks/Patios"}
        source={"/deck.jpg"}
        description={desc}
      />
      <ServicePreview
        title={"Decks/Patios"}
        source={"/deck.jpg"}
        description={desc}
        reverse
      />
      <ServicePreview
        title={"Decks/Patios"}
        source={"/deck.jpg"}
        description={desc}
      />
    </Box>
  );
}
