import { Grid, Center } from "@chakra-ui/react";
import BusinessForm from "../../../components/forms/registration/business-form";
import LeftPanel from "../../../components/forms/registration/left-panel";
import React from "react";

const BusinessRegistration = () => {
  return (
    <Grid templateColumns="1fr 60%">
      <Center>
        <BusinessForm></BusinessForm>
      </Center>
      <LeftPanel></LeftPanel>
    </Grid>
  );
};

export default BusinessRegistration;
