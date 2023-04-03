import React from "react";
import LoginForm from "../../../components/forms/login/login-form";
import LeftPanel from "../../../components/forms/registration/left-panel";
import { Center, Grid } from "@chakra-ui/react";

const Login = () => {
  return (
    <Grid templateColumns="60% 1fr">
      <LeftPanel></LeftPanel>
      <Center>
        <LoginForm></LoginForm>
      </Center>
    </Grid>
  );
};

export default Login;
