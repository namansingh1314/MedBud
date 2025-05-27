import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { FaBrain, FaHospital, FaUserMd, FaDatabase } from "react-icons/fa";

const StatBox = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <Stack
      color={useColorModeValue("gray.800", "white")}
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.600")}
      p={6}
      rounded="xl"
      shadow="md"
      textAlign="center"
      height="100%"
      justify="center"
    >
      <Icon as={icon} w={10} h={10} color="blue.500" mx="auto" />
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Text color="gray.600">{description}</Text>
    </Stack>
  );
};

const About = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Stack spacing={12}>
          {/* Introduction Section */}
          <Stack spacing={4}>
            <Heading as="h1" size="2xl" color="blue.600">
              About Our System
            </Heading>
            <Text fontSize="xl" color="gray.600">
              The Medicine Recommendation System is an advanced healthcare
              solution that combines machine learning with medical knowledge to
              provide personalized health insights and recommendations.
            </Text>
          </Stack>

          {/* Stats Section */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            <StatBox
              icon={FaBrain}
              title="ML-Powered"
              description="Advanced SVM model for accurate disease prediction"
            />
            <StatBox
              icon={FaHospital}
              title="41 Diseases"
              description="Comprehensive coverage of common conditions"
            />
            <StatBox
              icon={FaUserMd}
              title="Personalized"
              description="Tailored health recommendations"
            />
            <StatBox
              icon={FaDatabase}
              title="Rich Dataset"
              description="Trained on 4,920+ medical cases"
            />
          </SimpleGrid>

          {/* Features Section */}
          <Stack spacing={4}>
            <Heading as="h2" size="xl" color="blue.600">
              Key Features
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Symptom-based disease prediction using Support Vector Machine
                (SVM) classifier
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Personalized medication recommendations based on predicted
                conditions
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Customized diet and workout plans for better health management
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Detailed precautions and lifestyle recommendations
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                User-friendly interface with secure authentication
              </ListItem>
            </List>
          </Stack>

          {/* Technical Details */}
          <Stack spacing={4}>
            <Heading as="h2" size="xl" color="blue.600">
              Technical Implementation
            </Heading>
            <Text color="gray.600">
              Our system utilizes a sophisticated Support Vector Machine (SVM)
              classifier trained on a comprehensive dataset of 4,920 medical
              cases. The model processes 132 unique symptoms to predict among 41
              different diseases with high accuracy. Each prediction is
              accompanied by detailed recommendations sourced from medical
              databases.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
