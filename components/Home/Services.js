import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ServicePreview from "../ServicesPreview";

export default function ServicesSection() {
  const driveways = (
    <span>
      Pressure washing your driveway is a great way to spruce up your property
      and improve your home&apos;s curb appeal. It can also drastically increase
      the value of your home for a potential buyer. If your driveway goes
      uncared for, it can grow algae, mold, moss and mildew which can lead to it
      needing to be repaired down the road. <br />
      <br />A driveway is something you use everyday and the first thing you see
      when you pull up to your house, so you might as well take care of it.
      Punchbowl Pressure Washing will make your driveway look brand-spanking-new
      again at an affordable price.
    </span>
  );
  const decks = (
    <span>
      Decks and patios are the perfect spaces to hangout when it’s warm outside,
      but it’s a lot less enjoyable when your deck or patio is caked with dirt.
      Not cleaning your deck or patio can result in damage and having to replace
      it entirely. <br />
      <br />
      Before you invite those guests over for that BBQ, consider giving your
      deck or patio a good pressure wash. Punchbowl Pressure Washing wants to
      help restore your deck or patio and turn that space into something you can
      enjoy with your family.
    </span>
  );
  const garages = (
    <span>
      Living in Colorado is amazing for many reasons, but your garage sure gets
      dirty between your car, bikes, skis, and lawn mower. Garages are a lot
      easier to use to store things and be a functional space when it’s clean.{" "}
      <br />
      <br />
      Punchbowl Pressure Washing can assist in cleaning up your garage and
      making it feel like you can breathe in there again.
    </span>
  );
  const roofs = (
    <span>
      Colorado’s climate is harsh on your roof and gutters and leaves them
      looking dirty and uncared for. Not properly washing your roof and cleaning
      out your gutters can damage them and result in runoff not draining
      properly.
      <br />
      <br />
      This can lead to foundation issues, flooded basements, pests and many
      other awful things. Before any of that happens, get in touch with
      Punchbowl Pressure Washing to clean up your roof and gutters and make sure
      that your home isn’t going to rot away.
    </span>
  );
  const siding = (
    <span>
      Pressure washing your house and siding can do wonders for your home&apos;s
      curb appeal and increase the value for a potential buyer. If it has been a
      while since you last pressure washed your house, there are likely years of
      accumulated dirt and grime covering that beautiful paint job.
      <br />
      <br />
      Punchbowl Pressure Washing can transform the look of your home by pressure
      washing the walls and siding of your house. Depending on the material of
      your home, there are different methods we use to ensure that material will
      stay in great shape.
    </span>
  );
  const vehicles = (
    <span>
      Whether you&apos;re four wheeling up a mountain to go camping or just
      commuting to work, your car is guaranteed to get dirty living in the
      Roaring Fork Valley. The outside is caked with mud and magnesium chloride
      while the inside is filled with dog hair and old snacks. <br />
      <br />
      Punchbowl Pressure Washing offers services for personal vehicles as well
      as a fleet of company vehicles/equipment. We will come to the site have
      your vehicles looking shiny and ready to take on the Colorado climate once
      again.
    </span>
  );
  return (
    <Box marginX={{ base: 0, md: 15, lg: 20 }} marginY={10}>
      <Text fontWeight={"700"} align={"center"} fontSize={"4xl"}>
        Our Services
      </Text>
      <ServicePreview
        title={"Driveways"}
        source={"/services/driveway.jpg"}
        description={driveways}
      />
      <ServicePreview
        title={"Decks/Patios"}
        source={"/services/deck.jpg"}
        description={decks}
        reverse
      />
      <ServicePreview
        title={"Vehicles"}
        source={"/services/vehicles.jpg"}
        description={vehicles}
      />
      <ServicePreview
        title={"Roofs & Gutters"}
        source={"/services/roofs.jpg"}
        description={roofs}
        reverse
      />
      <ServicePreview
        title={"Garages"}
        source={"/services/garage.jpg"}
        description={garages}
      />
      <ServicePreview
        title={"Houses/Siding"}
        source={"/services/siding.jpg"}
        description={siding}
        reverse
      />
    </Box>
  );
}
