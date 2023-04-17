import React from "react";
import LoginForm from "../../../components/forms/login/login-form";
import LeftPanel from "../../../components/forms/registration/left-panel";
import { Center, Grid } from "@chakra-ui/react";
import ResetPassword from "../../../components/forms/resetPassword/ResetPassword";

const Reset = () => {
  return (
    <Grid templateColumns="60% 1fr">
      <LeftPanel></LeftPanel>
      <Center>
        <ResetPassword></ResetPassword>
      </Center>
    </Grid>
  );
};

export default Reset;
