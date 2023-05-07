import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Box } from "@chakra-ui/react";

export default function SliderImage({ before, after }) {
  return (
    <Box>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={before}
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after}
            alt="Image two"
          />
        }
      />
    </Box>
  );
}
