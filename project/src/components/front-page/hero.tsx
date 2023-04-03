import React from "react";
import {
  Container,
  Center,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { DashboardIcon, GridLower, GridUpperIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Center>
      <VStack spacing={10}>
        <Container alignItems="center">
          <Center>
            <Heading as="h1" size="3xl" color="dark">
              Divide & Conquer
            </Heading>
          </Center>
          <Center>
            <Heading as="h1" size="3xl" color="dark">
              Payments
            </Heading>
          </Center>
        </Container>
        <Container>
          <Text align="center" fontSize="xl" color="dark">
            No more awkward bill-splitting conversations
          </Text>
          <Text
            align="center"
            fontSize="xl"
            fontWeight="medium"
            color="secondary.600">
            Use our app instead!
          </Text>
        </Container>
        <Button
          onClick={() => navigate("/registration/particular")}
          variant="outline"
          size="lg"
          colorScheme="dark"
          border="2px"
          borderRadius="10px">
          Get Started
        </Button>
        <DashboardIcon></DashboardIcon>
      </VStack>
    </Center>
  );
};

export default Hero;
