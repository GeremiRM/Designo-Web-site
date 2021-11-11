import { Stack, Button, Box, Textarea } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputField } from "./InputField";

type errorsType = {
  name?: string;
  email?: string;
  phone?: string;
  comments?: string;
};

export const ContactForm: React.FC<{}> = ({}) => {
  const validate = (values) => {
    const errors: errorsType = {};

    console.log(values);

    for (let value in values) {
      if (!values[value])
        value !== "email"
          ? (errors[value] = "Can't be empty")
          : (errors[value] = "Invalid Email");
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      onSubmit={async (values, actions) => {
        actions.setErrors(validate(values));
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing={{ base: "1.5rem", md: "2rem" }} pb="1rem">
            <InputField name="name" placeholder="Name" label="name" />

            <InputField
              name="email"
              placeholder="Email Address"
              label="email"
              type="email"
            />

            <InputField
              name="phone"
              placeholder="Phone"
              label="phone"
              type="phone"
            />

            <Textarea
              name="comments"
              placeholder="Your Message"
              fontSize="0.9rem"
              border="none"
              borderBottom="2px solid #ddd"
              borderRadius="none"
              resize="none"
              _placeholder={{
                color: "#ddd",
              }}
              _focus={{
                borderBottomColor: "white",
                outline: "none",
              }}
              _invalid={{
                borderBottomColor: "red",
              }}
            />

            <Box
              alignSelf="flex-end"
              pt={{ base: "4rem", sm: "2rem", md: "0" }}
            >
              <Button
                isLoading={isSubmitting}
                type="submit"
                color="black"
                textTransform="uppercase"
                fontFamily="inherit"
                p="1.7rem 3rem"
                fontSize="0.9rem"
                letterSpacing="1px"
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
