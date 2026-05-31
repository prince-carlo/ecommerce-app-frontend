import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import { Box } from "@chakra-ui/react";


export default function MainLayout() {
  return (
    <Box minH={"100vh"} display={"flex"} flexDirection={"column"}>
      <Navbar />
      <Box as="main" flex={"1"}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}