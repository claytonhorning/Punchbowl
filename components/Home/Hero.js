import React, { useEffect } from "react";
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
  Checkbox,
  CheckboxGroup,
  Button,
  FormControl,
  FormLabel,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { database } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function HeroSection() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
    street: "",
    driveway: false,
    deckPatio: false,
    garage: false,
    gutters: false,
    roof: false,
    siding: false,
    vehicles: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState();

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const validate = () => {
    if (inputs.name <= 5) {
      handleError("Name must be more than 5 characters.", "name");
      return false;
    }
    if (inputs.email <= 5) {
      handleError("Email address must be more than 5 characters.", "email");
      return false;
    }
    if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Email address must be valid.", "email");
      return false;
    }
    if (inputs.state <= 5) {
      handleError("State must be more than 5 characters.", "state");
      return false;
    }
    if (inputs.city <= 5) {
      handleError("City must be more than 5 characters.", "city");
      return false;
    }
    if (inputs.street <= 5) {
      handleError("Street must be more than 5 characters.", "street");
      return false;
    }
    if (
      inputs.driveway === false &&
      inputs.deckPatio === false &&
      inputs.garage === false &&
      inputs.gutters === false &&
      inputs.roof === false &&
      inputs.siding === false &&
      inputs.vehicles === false
    ) {
      handleError("A service must be selected", "services");
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (validate()) {
      const estimatesRef = collection(database, "estimates");
      console.log(inputs);
      await addDoc(estimatesRef, {
        ...inputs,
        to: "punchbowlpw@gmail.com",
        message: {
          subject: `New form submission from ${inputs.name}`,
          html: `
          Address: ${inputs.street} ${inputs.city}, ${inputs.state} <br><br> 
          Email: ${inputs.email} <br><br> 
          Services: 
          <ul>
            <li>
              Driveway - ${inputs.driveway} 
            </li>
            <li>
              Deck/Patio - ${inputs.deckPatio} 
            </li>
            <li>
              Garage - ${inputs.garage}
            </li>
            <li>
             Gutters - ${inputs.gutters}
            </li>
            <li>
              Roof - ${inputs.roof}
            </li>
            <li>
              Siding - ${inputs.siding}
            </li>
           <li>
              Vehicles - ${inputs.vehicles} 
           </li>
          </ul>`,
        },
      })
        .then((res) => {
          setSuccess("Form submitted successfully.");
        })
        .catch((error) => {
          handleError(error.message, "server");
        });

      setInputs({
        name: "",
        email: "",
        state: "",
        city: "",
        street: "",
        driveway: false,
        deckPatio: false,
        garage: false,
        gutters: false,
        roof: false,
        siding: false,
        vehicles: false,
      });
    }
  };

  useEffect(() => {
    setErrors({});
  }, [inputs]);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      height={{ base: "125vh", xs: "105vh", sm: "90vh", md: "70vh" }}
      alignItems={{ md: "center" }}
      marginX={{ base: 0, sm: 10, md: 15, lg: 20 }}
      color={"white"}
      top={0}
      spacing={{ base: 5, md: 2 }}
      id="hero"
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
          Driveways, decks, patios, garages, siding, vehicles - we make them all
          look shiny and new again. Get in touch to see how we can improve the
          look of your house or business.
        </Text>
      </Stack>
      <Spacer />
      <Box
        borderRadius={"5"}
        bgColor={"white"}
        width={{ base: "90%", sm: "350px", md: "390px" }}
        color={"black"}
        alignSelf={"center"}
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
          <Input
            name="name"
            onChange={(e) => handleOnChange(e)}
            placeholder="Name"
            size="md"
            isInvalid={errors.name}
            value={inputs.name}
          />
          <Input
            name="email"
            onChange={(e) => handleOnChange(e)}
            placeholder="Email"
            size="md"
            isInvalid={errors.email}
            value={inputs.email}
          />
          <Stack direction={"row"}>
            <Select
              name="state"
              onChange={(e) => handleOnChange(e)}
              placeholder="State"
              isInvalid={errors.state}
              value={inputs.state}
            >
              <option value="colorado">Colorado</option>
            </Select>
            <Select
              name="city"
              onChange={(e) => handleOnChange(e)}
              placeholder="City"
              isInvalid={errors.city}
              value={inputs.city}
            >
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
          <Input
            name="street"
            onChange={(e) => handleOnChange(e)}
            placeholder="Street"
            size="md"
            isInvalid={errors.street}
            value={inputs.street}
          />
          <Text fontSize={"md"} fontWeight={500}>
            Services needed
          </Text>
          <Stack>
            <CheckboxGroup>
              <SimpleGrid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4,1fr)",
                }}
                rowGap={1}
                columnGap={2}
              >
                <Checkbox
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      driveway: !inputs.driveway,
                    }))
                  }
                >
                  Driveway
                </Checkbox>
                <Checkbox
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      deckPatio: !inputs.deckPatio,
                    }))
                  }
                >
                  Deck/patio
                </Checkbox>
                <Checkbox
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      garage: !inputs.garage,
                    }))
                  }
                >
                  Garage
                </Checkbox>
                <Checkbox
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      roof: !inputs.roof,
                    }))
                  }
                >
                  Roof
                </Checkbox>
                <Checkbox
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      gutters: !inputs.gutters,
                    }))
                  }
                >
                  Gutters
                </Checkbox>
                <Checkbox
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      siding: !inputs.siding,
                    }))
                  }
                >
                  Siding
                </Checkbox>
                <Checkbox
                  onChange={() =>
                    setInputs((prevState) => ({
                      ...prevState,
                      vehicles: !inputs.vehicles,
                    }))
                  }
                >
                  Vehicles
                </Checkbox>
              </SimpleGrid>
            </CheckboxGroup>
          </Stack>
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
            onClick={submit}
          >
            <Text fontWeight={500}>Get estimate</Text>
          </Box>

          <Text align={"center"} color={success ? "green.400" : "red.400"}>
            {success !== undefined || "" ? success : Object.values(errors)[0]}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
