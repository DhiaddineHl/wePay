import {
  Center,
  VStack,
  HStack,
  Heading,
  Highlight,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  VLineIcon,
  HLineIcon,
  PaymentCardIcon,
  CustomLineIcon,
  GroupIcon,
} from "../../assets/icons";

const ThridSection = () => {
  return (
    <Center>
      <VStack>
        <HStack align="center" paddingInline={40} spacing="100px">
          <GroupIcon></GroupIcon>
          <VLineIcon></VLineIcon>
          <VStack align="flex-end" spacing={4}>
            <Heading lineHeight="tall">
              <Highlight
                query="hassle-free"
                styles={{
                  px: "4",
                  py: "1",
                  rounded: "full",
                  bg: "primary.600",
                  color: "white",
                  fontFamily: "NewYork",
                }}>
                hello to hassle-free payments.
              </Highlight>
            </Heading>

            <Box maxW="520px">
              <Text>
                Whether you're out with friends or family, our service makes it
                easy and reliable to split payments, saving you time and money
                while making sure everyone pays their fair share.
              </Text>
            </Box>
          </VStack>
        </HStack>
        <HLineIcon />
      </VStack>
    </Center>
  );
};

export default ThridSection;
