import React from "react";
import { VStack, Text, Button, Center, Container } from "@chakra-ui/react";

const UpperHook = () => {
  return (
    <Center bg="dark.900" paddingBlock={10}>
      <VStack>
        <Center mb={6}>
          <VStack>
            <Text color="white">
              Tired of splitting transactions manually?{" "}
            </Text>
            <Text color="white">
              Simplify your life with a custom payment method that makes
              splitting payments a breeze.
            </Text>
          </VStack>
        </Center>
        <Button
          variant="unstyled"
          size="lg"
          color="white"
          borderColor="white"
          border="2px"
          fontWeight="normal"
          paddingInline={3}
          borderRadius="10px"
          _hover={{ color: "dark.600", bg: "white", fontWeight: "medium" }}>
          Try SplitPay
        </Button>
      </VStack>
    </Center>
  );
};

export default UpperHook;
