import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import SliderImage from "../SliderImage";

export default function OurWork() {
  return (
    <Box
      marginX={{ base: 0, md: 15, lg: 20 }}
      marginTop={{ base: -10, md: 8, lg: 10 }}
      marginBottom={{ base: 16 }}
    >
      <Text fontWeight={"700"} align={"center"} fontSize={"4xl"}>
        Our Work
      </Text>
      <Grid
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        mt={8}
        rowGap={10}
        columnGap={{ base: 10, xl: 20 }}
      >
        <GridItem>
          <SliderImage
            before={"./patio-before.JPG"}
            after={"./patio-after.JPG"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Patio in Glenwood Springs, CO
          </Text>
        </GridItem>
        <GridItem>
          <SliderImage
            before={"./coming-soon.jpg"}
            after={"./coming-soon.jpg"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Driveway in Carbondale, CO
          </Text>
        </GridItem>
        <GridItem>
          <SliderImage
            before={"./coming-soon.jpg"}
            after={"./coming-soon.jpg"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Roof in New Castle, CO
          </Text>
        </GridItem>
        <GridItem>
          <SliderImage
            before={"./coming-soon.jpg"}
            after={"./coming-soon.jpg"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Deck in Glenwood Springs, CO
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
