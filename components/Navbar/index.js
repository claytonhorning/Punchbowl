import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Container,
  Link,
  LinkBox,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  PhoneIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "underline",
      bg: 'useColorModeValue("gray.200", "gray.700")',
    }}
    href={href}
    color={"white"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Box
      position={"sticky"}
      top={0}
      zIndex={10}
      bg={colorChange ? "rgba(0,0,0,.9)" : "transparent"}
    >
      <Container maxW={"1500px"}>
        <Box marginX={{ base: 0, sm: 5, md: 15, lg: 20 }}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Link display={{ md: "none" }} href="tel:9709874747">
              <IconButton
                size={"md"}
                color={"white"}
                icon={<PhoneIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                bg={"transparent"}
                border={"1.5px solid white"}
                _hover={{ color: "black", bgColor: "white" }}
              />{" "}
            </Link>

            <Link href="/">
              <Image src={"/logo-web.png"} height={50} width={300} />
            </Link>

            <Flex alignItems={"center"}>
              <Stack
                as={"nav"}
                spacing={10}
                display={{ base: "none", md: "flex" }}
                color={"white"}
                direction={"row"}
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <EmailIcon />
                  <Link href="mailto:punchbowlpw@gmail.com">
                    punchbowlpw@gmail.com
                  </Link>
                </Stack>
                <Stack direction={"row"} alignItems={"center"}>
                  <PhoneIcon />
                  <Link href="tel:970-987-4747">970-987-4747</Link>
                </Stack>
                {/* <NavLink href={"/"}>Home</NavLink>
                <Menu>
                  <MenuButton>
                    <NavLink>Services</NavLink>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href="/services/driveways">Driveways</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/services/decks-patios">Decks/Patios</Link>
                    </MenuItem>
                    <MenuItem>Garages</MenuItem>
                    <MenuItem>Roofs & Gutters</MenuItem>
                    <MenuItem>Houses/Siding</MenuItem>
                  </MenuList>
                </Menu>
                <NavLink>About</NavLink>
                <NavLink>Contact</NavLink> */}
              </Stack>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box bg={"white"} pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <NavLink>Home</NavLink>
                <Menu>
                  <MenuButton>
                    <NavLink>Services</NavLink>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Driveways</MenuItem>
                    <MenuItem>Decks/Patios</MenuItem>
                    <MenuItem>Garages</MenuItem>
                    <MenuItem>Roofs & Gutters</MenuItem>
                    <MenuItem>Houses/Siding</MenuItem>
                  </MenuList>
                </Menu>
                <NavLink>About</NavLink>
                <NavLink>Contact</NavLink>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
}
