import React from "react";
import { Grid, Center } from "@chakra-ui/react";
import ParticularForm from "../../../components/forms/registration/particular-form";
import LeftPanel from "../../../components/forms/registration/left-panel";

const ParticularRegistration = () => {
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
