import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { ProcessIcon, VArrowIcon } from "../../assets/icons";

const SecondSection = () => {
  return (
    <VStack>
      <VArrowIcon></VArrowIcon>
      <Box h="40px"></Box>
      <Heading>Payment splitting made simple!</Heading>
      <Box h="80px"></Box>
      <ProcessIcon></ProcessIcon>
    </VStack>
  );
};

export default SecondSection;
