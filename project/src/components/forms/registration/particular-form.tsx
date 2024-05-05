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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import useRegisterParticular from "../../../hooks/useRegsiterParticular";

interface ParticularFormProps {
  name: string;
  email: string;
  password: string;
  ICN : string;
}

const ParticularForm = () => {
  const registrationSchema = Yup.object().shape({
    email: Yup.string().email("*Invalid email").required("*No email provided."),
    password: Yup.string()
      .required("*No Password provided.")
      .min(6, "*Password should be at least 6 characters long."),
    ICN: Yup.string()
      .min(6, "*ICN too short!")
      .required("*No identity card number provided."),
    name: Yup.string()
      .max(15, "*Too Long!")
      .required("*No name provided."),
  });

    const navigate = useNavigate();

    const registerParticular = useRegisterParticular();

    const initialValues : ParticularFormProps = {
      name : "",
      email : "",
      password : "",
      ICN : ""
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
          >
          Particular
        </Button>
        <Box w={1} />
        <Button
          onClick={() => navigate("/businessreg")}
          variant="ghost"
          fontWeight="bold"
          fontSize="16px"
          colorScheme="dark"
          color={"lightgrey"}
          >
          Business
        </Button>
      </HStack>
      <Heading mb={2} as="h2" fontSize="28" color="text-header">
        Tell us about yourself!{" "}
      </Heading>
      <Text mb={8} fontSize="16px" color="text-paragraph">
        This is an initial information about yourself. you can change it
        anytime!
      </Text>
      <Formik
        validationSchema={registrationSchema}
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);          
          registerParticular.mutate(values)
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
                  placeholder="Name"
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
                  placeholder="Email"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.email && touched.email ? (
                  <Text color="red">{errors.email}</Text>
                ) : null}
                <Field
                  as={Input}
                  id="ICN"
                  name="ICN"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Identity card number"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.ICN && touched.ICN ? (
                  <Text color="red">{errors.ICN}</Text>
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
                    disabled={registerParticular.isLoading}>
                    {registerParticular.isLoading ? <Spinner /> : "Regsiter"}                   
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

export default ParticularForm;
