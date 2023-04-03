import {
  Center,
  Heading,
  HStack,
  VStack,
  Text,
  Highlight,
  Box,
} from "@chakra-ui/react";
import React from "react";
import {
  PaymentCardIcon,
  VArrowIcon,
  ProcessIcon,
  VLineIcon,
  CustomLineIcon,
} from "../../assets/icons";

const FirstSection = () => {
  return (
    <Center>
      <VStack>
        <HStack align="center" paddingInline={40} spacing="100px">
          <VStack align="flex-start" spacing={4}>
            <Box>
              <Heading lineHeight="tall">
                <Highlight
                  query="Splitpay"
                  styles={{
                    px: "4",
                    py: "1",
                    rounded: "full",
                    bg: "secondary.600",
                    color: "white",
                    fontFamily: "NewYork",
                  }}>
                  Let our Splitpay do the math,
                </Highlight>
              </Heading>
              <Heading>so you don't have to!</Heading>
            </Box>
            <Box maxW="450px">
              <Text>
                Splitting payments with friends just got a whole lot easier. Our
                SplitPay feature uses advanced algorithms to process payments
                and split them in no time.
              </Text>
            </Box>
          </VStack>
          <VLineIcon></VLineIcon>
          <PaymentCardIcon></PaymentCardIcon>
        </HStack>
        <CustomLineIcon />
      </VStack>
    </Center>
  );
};

export default FirstSection;
