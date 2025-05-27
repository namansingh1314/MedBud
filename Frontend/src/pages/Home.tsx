import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaStethoscope,
  FaHeartbeat,
  FaNotesMedical,
  FaUserMd,
} from "react-icons/fa";

const Feature = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: any;
}) => {
  return (
    <Stack
      spacing={4}
      p={[4, 6, 8]}
      color={useColorModeValue("gray.800", "white")}
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.600")}
      rounded="xl"
      shadow="lg"
      height="100%"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "xl",
        borderTop: "4px solid",
        borderColor: "blue.500",
      }}
    >
      <Icon
        as={icon}
        w={[8, 10, 12]}
        h={[8, 10, 12]}
        color="blue.500"
        transition="all 0.3s"
        _groupHover={{ transform: "scale(1.1)" }}
      />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text color="gray.600" fontSize={["sm", "md"]}>
        {text}
      </Text>
    </Stack>
  );
};

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Container py={[12, 16, 20]}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={[8, 10, 16]}
          align="center"
          justify="space-between"
        >
          <Stack spacing={[6, 8]} maxW="lg" flex="1">
            <Heading
              as="h1"
              fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="bold"
              bgGradient="linear(to-r, blue.600, blue.400)"
              bgClip="text"
              lineHeight={["shorter", "short"]}
            >
              Your Personal Health Assistant
            </Heading>
            <Text
              fontSize={["lg", "xl"]}
              color="gray.600"
              maxW="xl"
              lineHeight="tall"
            >
              Get instant disease predictions based on your symptoms and receive
              personalized recommendations for medications, diet, and lifestyle
              changes.
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={[4, 6]}
              pt={[2, 4]}
            >
              <Button
                as={RouterLink}
                to="/predict"
                size={["md", "lg"]}
                colorScheme="blue"
                px={[6, 8, 10]}
                py={[6, 7]}
                fontSize={["md", "lg"]}
                fontWeight="bold"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
              >
                Try Prediction
              </Button>
              <Button
                as={RouterLink}
                to="/about"
                size={["md", "lg"]}
                variant="outline"
                colorScheme="blue"
                px={[6, 8, 10]}
                py={[6, 7]}
                fontSize={["md", "lg"]}
                fontWeight="bold"
                _hover={{
                  bg: "blue.50",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
          <Box
            flex="1"
            maxW={["sm", "md", "lg"]}
            transform="auto"
            _hover={{ scale: 1.02 }}
            transition="all 0.3s"
          >
            <Image
              src="https://img.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg"
              alt="Healthcare Illustration"
              borderRadius="2xl"
              shadow="2xl"
              w="full"
              h="auto"
            />
          </Box>
        </Stack>
      </Container>

      {/* Features Section */}
      <Box
        bg={useColorModeValue("white", "gray.700")}
        borderColor={useColorModeValue("gray.200", "gray.600")}
        py={[12, 16, 20]}
        px={[4, 6, 8]}
      >
        <Container maxW="container.xl">
          <Heading
            textAlign="center"
            mb={[8, 12, 16]}
            fontSize={["2xl", "3xl", "4xl"]}
            bgGradient="linear(to-r, blue.600, blue.400)"
            bgClip="text"
          >
            Why Choose Us?
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={[6, 8, 10]}
            px={[0, 4, 8]}
          >
            <Feature
              icon={FaStethoscope}
              title="Accurate Predictions"
              text="Advanced machine learning model trained on extensive medical data for reliable disease predictions."
            />
            <Feature
              icon={FaHeartbeat}
              title="Personalized Care"
              text="Get tailored recommendations for medications, diet, and lifestyle changes based on your symptoms."
            />
            <Feature
              icon={FaNotesMedical}
              title="Comprehensive Analysis"
              text="Detailed insights about potential conditions and preventive measures to maintain your health."
            />
            <Feature
              icon={FaUserMd}
              title="Easy to Use"
              text="Simple and intuitive interface to help you get quick health insights anytime, anywhere."
            />
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
