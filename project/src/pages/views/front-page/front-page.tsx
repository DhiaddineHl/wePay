import React from "react";
import Hero from "../../../components/front-page/hero";
import Navbar from "../../../components/front-page/navbar";
import UpperHook from "../../../components/front-page/hook-upper";
import { VStack, Box } from "@chakra-ui/react";
import FirstSection from "../../../components/front-page/first-section";
import SecondSection from "../../../components/front-page/second-section";
import ThirdSection from "../../../components/front-page/third-section";
import Footer from "../../../components/front-page/footer";

const FrontPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box h={20}></Box>
      <Hero></Hero>
      <Box h={20}></Box>
      <Box h={20}></Box>
      <UpperHook></UpperHook>
      <Box h={20}></Box>
      <Box h={20}></Box>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <Box h={20}></Box>
      <Box h={20}></Box>
      <ThirdSection></ThirdSection>
      <Box h={20}></Box>
      <Box h={20}></Box>
      <Footer></Footer>
    </>
  );
};

export default FrontPage;
