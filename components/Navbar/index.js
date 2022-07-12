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

const Links = ["Dashboard", "Projects", "Team"];

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

  return (
    <Container maxW={"1500px"}>
      <Box bg={"transparent"} px={4} marginX={{ md: 15, lg: 20 }}>
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
          <Text color={"white"}>Alpine Pressure Washing</Text>
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
  );
}
