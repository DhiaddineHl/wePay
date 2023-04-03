import {
  Center,
  VStack,
  Button,
  Text,
  Heading,
  Flex,
  HStack,
  Spacer,
  Box,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center bg="dark.900" paddingBlock={8} paddingInline={40}>
      <Flex width="100%">
        <HStack spacing={10}>
          <Button color="white" variant="link" fontWeight="400">
            ● Business
          </Button>
          <Button color="white" variant="link" fontWeight="400">
            ● Particular
          </Button>
          <Button color="white" variant="link" fontWeight="400">
            ● Developer
          </Button>
        </HStack>
        <Spacer></Spacer>
        <VStack align="flex-end">
          <Heading
            size="lg"
            color="white"
            fontWeight="500"
            letterSpacing="wider">
            WePay
          </Heading>
          <Text color="white" fontWeight="400" fontSize="14px">
            © 2023 All rights reserved.
          </Text>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Footer;
