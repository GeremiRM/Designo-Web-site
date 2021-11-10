import React, { InputHTMLAttributes } from "react";

import {
  Text,
  Box,
  HStack,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  size: _,
  label,
  ...props
}) => {
  const [field, { error }] = useField(props);

  const errorMessage = () => {
    return (
      <HStack h="100px" mb="0.5rem">
        <Text fontStyle="italic" fontSize="1rem">
          {error}
        </Text>
        <Box
          bg="url(./contact/desktop/icon-error.svg) no-repeat center/contain"
          w="25px"
          h="20px"
        ></Box>
      </HStack>
    );
  };

  return (
    <FormControl isInvalid={!!error}>
      {/* <FormLabel htmlFor={field.name}>{label}</FormLabel> */}
      <InputGroup>
        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder}
          color="white"
          variant="flushed"
          fontFamily="inherit"
          fontSize="0.9rem"
          _placeholder={{
            color: "#ddd",
          }}
          _focus={{
            borderBottomColor: "white",
            outline: "none",
          }}
        />

        <InputRightElement w="fit-content" children={error && errorMessage()} />
      </InputGroup>
    </FormControl>
  );
};
