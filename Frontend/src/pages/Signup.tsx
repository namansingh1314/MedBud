import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { supabase } from "../lib/supabase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      if (user) {
        // Create profile
        const { error: profileError } = await supabase
          .from("profiles")
          .insert([{ id: user.id, username, avatar_url: "" }]);

        if (profileError) throw profileError;

        toast({
          title: "Account created successfully",
          description: "Please check your email for verification link",
          status: "success",
          duration: 5000,
        });
        navigate("/login");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.sm" py={8}>
      <Box
        p={8}
        rounded="xl"
        shadow="lg"
        bg={useColorModeValue("white", "gray.700")}
        borderWidth="1px"
        borderColor={useColorModeValue("gray.200", "gray.600")}
      >
        <Stack spacing={6}>
          <Heading
            textAlign="center"
            color={useColorModeValue("blue.600", "blue.400")}
          >
            Create Account
          </Heading>
          <form onSubmit={handleSignup}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Choose a username"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Choose a password"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                fontSize="md"
                isLoading={loading}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
          <Text textAlign="center">
            Already have an account?{" "}
            <Link as={RouterLink} to="/login" color="blue.500">
              Sign in
            </Link>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default Signup;
