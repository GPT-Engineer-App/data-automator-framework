import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, useToast, VStack, Heading } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const apiBaseUrl = "https://backengine-w2ne.fly.dev";
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast({
          title: "Logged in successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login failed.",
          description: "Please check your credentials.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to log in.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast({
          title: "Signed up successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Signup failed.",
          description: "Please check your credentials.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to sign up.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={8} py={12}>
        <Heading>Welcome to the Dashboard</Heading>
        <Stack spacing={4} width="100%">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button leftIcon={<FaSignInAlt />} onClick={handleLogin} colorScheme="blue" width="full">
            Login
          </Button>
          <Button leftIcon={<FaUserPlus />} onClick={handleSignup} colorScheme="green" width="full">
            Sign Up
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
