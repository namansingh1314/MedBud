import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  IconButton,
  useDisclosure,
  HStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      px={[4, 6, 8]}
      py={2}
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="md"
      backdropFilter="blur(10px)"
      backgroundColor={useColorModeValue(
        "rgba(255, 255, 255, 0.8)",
        "rgba(26, 32, 44, 0.8)"
      )}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onToggle}
          variant="ghost"
          _hover={{ bg: "gray.100" }}
        />

        <HStack spacing={[4, 6, 8]} alignItems="center">
          <Box
            fontSize={["xl", "2xl"]}
            fontWeight="bold"
            as={RouterLink}
            to="/"
            color="blue.600"
            _hover={{ color: "blue.700" }}
          >
            MedRec
          </Box>
          <HStack
            as="nav"
            spacing={[2, 4, 6]}
            display={{ base: "none", md: "flex" }}
          >
            <Box
              as={RouterLink}
              to="/about"
              px={3}
              py={2}
              rounded="md"
              _hover={{ bg: "blue.50", color: "blue.600" }}
              transition="all 0.2s"
            >
              About
            </Box>
            {user && (
              <>
                <Box
                  as={RouterLink}
                  to="/predict"
                  px={3}
                  py={2}
                  rounded="md"
                  _hover={{ bg: "blue.50", color: "blue.600" }}
                  transition="all 0.2s"
                >
                  Predict
                </Box>
                <Box
                  as={RouterLink}
                  to="/profile"
                  px={3}
                  py={2}
                  rounded="md"
                  _hover={{ bg: "blue.50", color: "blue.600" }}
                  transition="all 0.2s"
                >
                  Profile
                </Box>
              </>
            )}
          </HStack>
        </HStack>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={[2, 4]}
          display={{ base: "none", md: "flex" }}
        >
          {user ? (
            <HStack spacing={4}>
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                _hover={{ bg: colorMode === "light" ? "gray.100" : "gray.700" }}
              />
              <Menu>
                <MenuButton>
                  <Avatar
                    size="sm"
                    src={profile?.avatar_url}
                    name={profile?.username}
                    bg="blue.500"
                    color="white"
                    _hover={{ transform: "scale(1.05)", bg: "blue.600" }}
                    transition="all 0.2s"
                    fontWeight="bold"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem as={RouterLink} to="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout} color="red.500">
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          ) : (
            <>
              <Button
                as={RouterLink}
                to="/login"
                variant="ghost"
                size={["sm", "md"]}
                _hover={{ bg: "blue.50" }}
              >
                Login
              </Button>
              <Button
                as={RouterLink}
                to="/signup"
                colorScheme="blue"
                size={["sm", "md"]}
                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                transition="all 0.2s"
              >
                Sign Up
              </Button>
            </>
          )}
        </Stack>
      </Flex>

      {/* Mobile menu */}
      {isOpen && (
        <Box
          pb={4}
          display={{ md: "none" }}
          borderTop="1px"
          borderColor="gray.200"
          bg={useColorModeValue("white", "gray.800")}
        >
          <Stack as="nav" spacing={2} px={2}>
            <Box
              as={RouterLink}
              to="/about"
              px={3}
              py={2}
              rounded="md"
              _hover={{ bg: "blue.50", color: "blue.600" }}
              transition="all 0.2s"
            >
              About
            </Box>
            {user ? (
              <>
                <Box
                  as={RouterLink}
                  to="/predict"
                  px={3}
                  py={2}
                  rounded="md"
                  _hover={{ bg: "blue.50", color: "blue.600" }}
                  transition="all 0.2s"
                >
                  Predict
                </Box>
                <Box
                  as={RouterLink}
                  to="/profile"
                  px={3}
                  py={2}
                  rounded="md"
                  _hover={{ bg: "blue.50", color: "blue.600" }}
                  transition="all 0.2s"
                >
                  Profile
                </Box>
                <Button
                  onClick={handleLogout}
                  colorScheme="red"
                  variant="ghost"
                  w="full"
                  _hover={{ bg: "red.50" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={RouterLink}
                  to="/login"
                  variant="ghost"
                  w="full"
                  _hover={{ bg: "blue.50" }}
                >
                  Login
                </Button>
                <Button
                  as={RouterLink}
                  to="/signup"
                  colorScheme="blue"
                  w="full"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                  transition="all 0.2s"
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
