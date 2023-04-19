import React from "react";
import { Grid, Center, Tabs, TabList, Tab, TabPanels, TabPanel, HStack, Button, Text } from "@chakra-ui/react";
import ParticularForm from "../../../components/forms/registration/particular-form";
import LeftPanel from "../../../components/forms/registration/left-panel";
import BusinessForm from "../../../components/forms/registration/business-form";
import { useNavigate } from "react-router-dom";

const ParticularRegistration = () => {

  const navigate = useNavigate();

  return (
    <Grid templateColumns="1fr 60%">
      <Center>
          <ParticularForm></ParticularForm>   
      </Center>
      <LeftPanel></LeftPanel>
    </Grid>
  );
};

export default ParticularRegistration;
