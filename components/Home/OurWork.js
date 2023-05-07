import {
  Box,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import SliderImage from "../SliderImage";

export default function OurWork() {
  return (
    <Box
      marginX={{ base: 0, md: 15, lg: 20 }}
      marginTop={{ base: 16, md: 10, lg: 10 }}
      marginBottom={{ base: 16 }}
    >
      <Text
        fontWeight={"700"}
        align={"center"}
        fontSize={"4xl"}
      >
        Our Work
      </Text>
      <Grid
        justifyContent={"center"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
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
            before={"./gator_before.JPG"}
            after={"./gator_after.JPG"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Gator in Missouri Heights , CO
          </Text>
        </GridItem>
        <GridItem>
          <SliderImage
            before={"./fj_engine_before.jpeg"}
            after={"./fj_engine_after.jpeg"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Engine Bay in Carbondale, CO
          </Text>
        </GridItem>
        <GridItem>
          <SliderImage
            before={"./gator_2_before.JPG"}
            after={"./gator_2_after.JPG"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Deck in Glenwood Springs, CO
          </Text>
        </GridItem>
        <GridItem>
          <SliderImage
            before={"./window_before.JPG"}
            after={"./window_after.JPG"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Windows in Carbondale, CO
          </Text>
        </GridItem>
        <GridItem>
          <SliderImage
            before={"./Rocks1-Before.jpeg"}
            after={"./Rocks1-After.jpeg"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Patio in Snowmass, CO
          </Text>
        </GridItem>
        {/* <GridItem>
          <SliderImage
            before={"./Rocks2-Before.jpeg"}
            after={"./Rocks2-After.jpeg"}
          />
          <Text mt={2} fontWeight={500} fontSize={"xl"}>
            Patio in Carbondale, CO
          </Text>
        </GridItem> */}
      </Grid>
    </Box>
  );
}
