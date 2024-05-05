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
import useRegisterBusiness from "../../../hooks/useRegisterBusiness";

interface BusinessFormProps {
  name: string;
  email : string;
  password : string;
  business_name : string;
  tax_registration_number : string;
}

const BusinessForm = () => {

  const registrationSchema = Yup.object().shape({
    email: Yup.string().email("*Invalid email").required("*No email provided."),
    password: Yup.string()
      .required("*No Password provided.")
      .min(6, "*Password should be at least 6 characters long."),
    business_name: Yup.string()
      .max(15, "*Too Long!")
      .required("*No business name provided."),
    name: Yup.string()
      .max(20, "*Too Long!")
      .required("*No name provided."),
    tax_registration_number: Yup.string()
      .max(20, "*Too Long!")
      .min(6, "*TRN too short!")
      .required("*No TRN provided."),
  });

  const navigate = useNavigate();

  const registerBusiness = useRegisterBusiness();

  const initialValues = {
    name : "",
    email : "",
    password : "",
    business_name : "",
    tax_registration_number : ""
  }

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
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
            registerBusiness.mutate(values)
        }}>
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack spacing={4}>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Store name"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.name && touched.name ? (
                  <Text color="red">{errors.name}</Text>
                ) : null}
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="email"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.email && touched.email ? (
                  <Text color="red">{errors.email}</Text>
                ) : null}
                <Field
                  as={Input}
                  id="business_name"
                  name="business_name"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Business Name"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.business_name && touched.business_name ? (
                  <Text color="red">{errors.business_name}</Text>
                ) : null}
                <Field
                  as={Input}
                  id="tax_registration_number"
                  name="tax_registration_number"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Tax Registration Number"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.tax_registration_number && touched.tax_registration_number ? (
                  <Text color="red">{errors.tax_registration_number}</Text>
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
