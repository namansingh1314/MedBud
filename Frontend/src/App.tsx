import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import theme from "./theme/theme";
import { ColorModeScript } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Router from "./router";
import { AuthProvider } from "./contexts/AuthContext";
import NProgress from "nprogress";
import "./styles/nprogress.css";
import { useEffect } from "react";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: "ease",
  speed: 500,
});

// Progress Bar Component
function ProgressBar() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ProgressBar />
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <Helmet>
              <title>MedRec - Medicine Recommendation System</title>
              <meta
                name="description"
                content="Get personalized medicine recommendations based on your symptoms and conditions"
              />
              <meta
                name="keywords"
                content="medicine, recommendation, healthcare, symptoms, treatment"
              />
            </Helmet>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Box
              minH="100vh"
              minW={"99vw"}
              display="flex"
              flexDirection="column"
            >
              <Navbar />
              <Box flex="1" width="100%" px={[4, 6, 8]} py={[6, 8, 10]}>
                <Router />
              </Box>
            </Box>
          </AuthProvider>
        </ChakraProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
