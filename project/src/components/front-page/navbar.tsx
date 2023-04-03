import React from "react";
import { Button, Heading, Spacer, Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex paddingBlock={8} paddingInline={40} placeContent="center">
        <Heading>WePay</Heading>
        <Spacer />
        <Button
          onClick={() => navigate("/registration/particular")}
          variant="ghost"
          fontWeight="normal"
          fontSize="20px"
          colorScheme="dark">
          ● Particular
        </Button>
        <Box w={20} />
        <Button
          onClick={() => navigate("/registration/business")}
          variant="ghost"
          fontWeight="normal"
          fontSize="20px"
          colorScheme="dark">
          ● Business
        </Button>
        <Box w={20} />
        <Button
          variant="ghost"
          fontWeight="normal"
          fontSize="20px"
          colorScheme="dark">
          ● Developer
        </Button>
        <Spacer />
        <Button
          onClick={() => navigate("/login")}
          variant="outline"
          border="2px"
          size="lg"
          colorScheme="dark"
          borderRadius="10px">
          Log in
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
