import React from "react";
import { InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";

interface Props {
  variant: string;
  focusBorderColor: string;
  placeholder: string;
  _placeholder: Object;
  value: any;
  onChange: any;
  onBlur: any;
  id: string;
}

const PasswordInput = ({
  variant,
  focusBorderColor,
  placeholder,
  _placeholder,
  value,
  onChange,
  onBlur,
  id,
}: Props) => {
  const [show, setShow] = React.useState(false);

  return (
    <InputGroup size={"lg"}>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        focusBorderColor={focusBorderColor}
        variant={variant}
        _placeholder={_placeholder}
      />
      <InputRightElement width="4.5rem">
        <Button
          variant="ghost"
          colorScheme="transparent"
          size="sm"
          onClick={() => {
            setShow(!show);
          }}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
