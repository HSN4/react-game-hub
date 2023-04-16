import { HStack, Image, Input, IconButton } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Input placeholder="Basic usage" />
      <IconButton aria-label="Search database" />
    </HStack>
  );
};

export default NavBar;
