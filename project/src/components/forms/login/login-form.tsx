import {
  Heading,
  Text,
  Box,
  Stack,
  Center,
  Button,
  Flex,
  Input,
  VStack,
  Spacer,
  AbsoluteCenter,
  FormControl,
  HStack,
} from "@chakra-ui/react";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import PasswordInput from "../../../shared/password-input/password-input";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("*Invalid email").required("*No email provided."),
    password: Yup.string().required("*No Password provided."),
  });

  const navigate = useNavigate();

  return (
    <Box maxW="24rem">
      <Center>
        <Heading mb={8} as="h2" fontSize="28" color="text-header">
          Welcome back!{" "}
        </Heading>
      </Center>

      <Formik
        validationSchema={loginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          axios.post("http://localhost:8080/auth/authenticate")
          .then(res =>
            console.log(JSON.stringify(values, null, 2))
          )
          
          resetForm();
        }}>
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack spacing={4}>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Email"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.email && touched.email ? (
                  <Text color="red">{errors.email}</Text>
                ) : null}
                <Field
                  as={PasswordInput}
                  id="password"
                  name="password"
                  variant="filled"
                  focusBorderColor="primary.600"
                  placeholder="Password"
                  _placeholder={{
                    opacity: 0.3,
                    color: "inherit",
                  }}></Field>
                {errors.password && touched.password ? (
                  <Text color="red">{errors.password}</Text>
                ) : null}
                <VStack>
                  <Button
                    type="submit"
                    mt={4}
                    mb={6}
                    size="lg"
                    colorScheme="primary"
                    w="100%">
                    Save
                  </Button>
                  <Button variant="link" colorScheme="primary" onClick={() => navigate('/reset')} >
                    Forgot Password?
                  </Button>
                  <HStack>
                    <Text>Don't have an account yet?</Text>
                    <Button variant="link" colorScheme="primary" onClick={() => navigate('/particularreg')}>
                      Register!
                    </Button>
                  </HStack>
                </VStack>
              </Stack>
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
