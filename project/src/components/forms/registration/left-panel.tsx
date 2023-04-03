import {
  Center,
  Flex,
  AbsoluteCenter,
  HStack,
  Text,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { GeneralIcon } from "../../../assets/icons";

const LeftPanel = () => {
  return (
    <Center bg="placeholder-color" position="relative">
      <Flex direction="column" textAlign="center" color="primary">
        <GeneralIcon />
        <AbsoluteCenter axis="horizontal" bottom="10" flex="1" mt="10">
          <HStack justifyItems="baseline" color="text-header">
            <Heading as="h2" size="xl">
              #Sharing is fun!!
            </Heading>
          </HStack>
        </AbsoluteCenter>
      </Flex>
    </Center>
  );
};

export default LeftPanel;
