import {
  Heading,
  Text,
  Box,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
  Spacer,
  FormControl,
} from "@chakra-ui/react";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import PasswordInput from "../../../shared/password-input/password-input";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ParticularForm = () => {
  const registrationSchema = Yup.object().shape({
    email: Yup.string().email("*Invalid email").required("*No email provided."),
    password: Yup.string()
      .required("*No Password provided.")
      .min(6, "*Password should be at least 6 characters long."),
    phone: Yup.string()
      .matches(/[1-9]/, "*Doesn't look like a valid number.")
      .max(15, "Too Long!")
      .required("*No phone number provided."),
    firstName: Yup.string()
      .max(15, "*Too Long!")
      .required("*No first name provided."),
    lastName: Yup.string()
      .max(15, "*Too Long!")
      .required("*No last name provided."),
  });

  const navigate = useNavigate();

  return (
    <Box maxW="24rem">
      <Heading mb={2} as="h6" fontSize="14px" color="text-header">
        PARTICULAR
      </Heading>
      <Heading mb={2} as="h2" fontSize="28" color="text-header">
        Tell us about yourself!{" "}
      </Heading>
      <Text mb={8} fontSize="16px" color="text-paragraph">
        This is an initial information about yourself. you can change it
        anytime!
      </Text>
      <Formik
        validationSchema={registrationSchema}
        initialValues={{
          email: "",
          password: "",
          phone: "",
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post(
              "http://localhost:8080/api/v1/auth/register",
              JSON.stringify(values, null, 2)
            )
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          console.log(JSON.stringify(values, null, 2));
          resetForm();
        }}>
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack spacing={4}>
                <Field
                  as={Input}
                  id="firstName"
                  name="firstName"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="First name"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.firstName && touched.firstName ? (
                  <Text color="red">{errors.firstName}</Text>
                ) : null}
                <Field
                  as={Input}
                  id="lastName"
                  name="lastName"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Last name"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.lastName && touched.lastName ? (
                  <Text color="red">{errors.lastName}</Text>
                ) : null}
                <InputGroup size="lg">
                  <InputLeftAddon children="+216" />
                  <Field
                    as={Input}
                    id="phone"
                    name="phone"
                    type="tel"
                    focusBorderColor="primary.600"
                    placeholder="Phone number"
                    _placeholder={{ opacity: 0.3, color: "inherit" }}
                  />
                </InputGroup>
                {errors.phone && touched.phone ? (
                  <Text color="red">{errors.phone}</Text>
                ) : null}
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
                <Flex>
                  <Button
                    onClick={() => navigate("/")}
                    mt={4}
                    variant="outline"
                    size="lg"
                    border="2px"
                    w="8rem"
                    colorScheme="primary"
                    leftIcon={<MdOutlineKeyboardReturn />}>
                    Return
                  </Button>
                  <Spacer />
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    mt={4}
                    size="lg"
                    colorScheme="primary">
                    Save
                  </Button>
                </Flex>
              </Stack>
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ParticularForm;
