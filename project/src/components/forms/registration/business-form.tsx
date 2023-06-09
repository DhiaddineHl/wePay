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
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import PasswordInput from "../../../shared/password-input/password-input";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useRegisterBusiness from "../../../hooks/useRegisterBusiness";



const BusinessForm = () => {

  const registrationSchema = Yup.object().shape({
    email: Yup.string().email("*Invalid email").required("*No email provided."),
    password: Yup.string()
      .required("*No Password provided.")
      .min(6, "*Password should be at least 6 characters long."),
    phone: Yup.string()
      .matches(/[1-9]/, "*Doesn't look like a valid number.")
      .max(15, "Too Long!")
      .required("*No phone number provided."),
    industry: Yup.string()
      .max(15, "*Too Long!")
      .required("*No industry provided."),
    storeName: Yup.string()
      .max(20, "*Too Long!")
      .required("*No store name provided."),
  });

  const navigate = useNavigate();

  const registerBusiness = useRegisterBusiness();

  return (
    <Box maxW="24rem">
      <HStack>
      <Button
          onClick={() => navigate("/particularreg")}
          variant="ghost"
          fontWeight="bold"
          fontSize="16px"
          colorScheme="dark"
          color={'lightgrey'}
          >
          Particular
        </Button>
        <Box w={1} />
        <Button
          onClick={() => navigate("/businessreg")}
          variant="ghost"
          fontWeight="bold"
          fontSize="16px"
          colorScheme="dark">
          Business
        </Button>
      </HStack>
      <Heading mb={2} as="h2" fontSize="28" color="text-header">
        Tell us about your store!
      </Heading>
      <Text mb={8} fontSize="16px" color="text-paragraph">
        This is an initial information about your business. you can change it
        anytime!
      </Text>
      <Formik
        validationSchema={registrationSchema}
        initialValues={{
          email: "",
          password: "",
          phone: "",
          storeName: "",
          industry: "",
        }}
        onSubmit={(values, { resetForm }) => {
            registerBusiness.mutate({
              storeName : values.storeName,
              industry : values.industry,
              phone : values.phone,
              email : values.email,
              password : values.password
            })
        }}>
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack spacing={4}>
                <Field
                  as={Input}
                  id="storeName"
                  name="storeName"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Store name"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.storeName && touched.storeName ? (
                  <Text color="red">{errors.storeName}</Text>
                ) : null}
                <Field
                  as={Input}
                  id="industry"
                  name="industry"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Industry"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.industry && touched.industry ? (
                  <Text color="red">{errors.industry}</Text>
                ) : null}
                <InputGroup size="lg">
                  <InputLeftAddon children="+216" />
                  <Input
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
                    colorScheme="primary"
                    disabled={registerBusiness.isLoading}>
                    {registerBusiness.isLoading ? <Spinner /> : "Regsiter"}   
                  </Button>
                </Flex>
                <HStack>
                    <Text>Already have an account?</Text>
                    <Button variant="link" colorScheme="primary" onClick={() => navigate('/Login')}>
                      Login!
                    </Button>
                </HStack>
              </Stack>
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default BusinessForm;
