
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}
