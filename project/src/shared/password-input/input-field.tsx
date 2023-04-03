import React from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/react";

interface InputFieldProps {
  name: string;
  label: string;
  restOfProps: { email: string; password: string };
}

const InputField = (props: InputFieldProps): JSX.Element => {
  const { label, ...restOfProps } = props;
  const [field, meta] = useField(props);

  return (
    <FormControl id={props.name} isInvalid={!!meta.error && !!meta.touched}>
      {label && (
        <FormLabel mb="1" htmlFor={props.name}>
          {label}
        </FormLabel>
      )}
    </FormControl>
  );
};

export default InputField;
