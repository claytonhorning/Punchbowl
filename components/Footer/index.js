import { Box, Container, Link, Stack, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

const ListHeader = ({ children }) => {
  return (
    <Text decoration={"underline"} fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"black"} color={"white"}>
      <Container maxW={"1500px"} py={10}>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent={"space-between"}
          marginX={{ md: 15, lg: 20 }}
        >
          <Stack mt={{ base: 8, md: 0 }} spacing={5}>
            <Box alignSelf={{ base: "center", md: "flex-start" }}>
              <Link href="/">
                <Image src={"/logo-web.png"} height={50} width={300} />
              </Link>
            </Box>
            <Link href="#hero" _hover={{ textDecoration: "none" }}>
              <Button
                alignSelf={{ base: "center", md: "flex-start" }}
                color={"black"}
                bg={"white"}
                width={52}
              >
                Request a free estimate
              </Button>{" "}
            </Link>

            <Text align={{ base: "center", md: "left" }} fontSize={"sm"}>
              © 2022 Alpine Pressure Washing LLC. All rights reserved
            </Text>
          </Stack>
          <Stack direction={"row"} spacing={20}>
            <Stack align={"flex-start"}>
              <ListHeader>Pages</ListHeader>
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>Services</Link>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Contact</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Service Areas</ListHeader>
              <Stack direction={"row"} spacing={6}>
                <Stack>
                  <Link href={"#"}>Carbondale</Link>
                  <Link href={"#"}>Glenwood Springs</Link>
                  <Link href={"#"}>New Castle</Link>
                  <Link href={"#"}>Rifle</Link>
                </Stack>
                <Stack>
                  <Link href={"#"}>Snowmass</Link>
                  <Link href={"#"}>Aspen</Link>
                  <Link href={"#"}>Basalt</Link>
                  <Link href={"#"}>El Jebel</Link>
                </Stack>
                <Stack display={{ base: "none", md: "flex" }}>
                  <Link href={"#"}>Silt</Link>
                  <Link href={"#"}>Gypsum</Link>
                  <Link href={"#"}>Eagle</Link>
                  <Link href={"#"}>Edwards</Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
