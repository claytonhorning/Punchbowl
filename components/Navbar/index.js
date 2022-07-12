import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: 'useColorModeValue("gray.200", "gray.700")',
    }}
    href={"#"}
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
        <Box px={4} marginX={{ md: 15, lg: 20 }}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              color={"white"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              bg={"transparent"}
              border={"1.5px solid white"}
            />

            <Image src={"/logo.png"} height={60} width={250} />
            <Flex alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
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
              </HStack>
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
