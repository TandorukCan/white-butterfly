import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  //   Heading,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const Form = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    // Form validation
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  // Show an alert when the form is submitted successfully
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      // Reset the form if the response is successful
      if (response.type === "success") formik.resetForm();
    } // eslint-disable-next-line
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      //   backgroundColor="#512DA8"
      //   py={16}
      //   spacing={8}
    >
      <VStack alignItems="flex-start">
        <Box
        // p={6} rounded="md" w="100%"
        >
          {/* Connect the form onSubmit prop with Formik's handleSubmit function */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <HStack>
                <FormControl
                  isInvalid={
                    !!formik.errors.firstName && formik.touched.firstName
                  }
                >
                  <FormLabel htmlFor="firstName">First Name *</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")} // Make the Input components from Chakra UI controlled components
                  />
                  {/* Show the error messages for each field when the field is touched and the validation fails */}
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input id="lastName" name="lastName" />
                  {/* Show the error messages for each field when the field is touched and the validation fails */}
                </FormControl>
              </HStack>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormLabel htmlFor="email">Email *</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Message *</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  //   height={250}
                  {...formik.getFieldProps("comment")}
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              {/* Show a loading indicator */}
              <Button type="submit" isLoading={isLoading}>
                Send
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default Form;
