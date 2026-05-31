import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.800" color="white" textAlign="center" py={6}>
      <Text>© {new Date().getFullYear()} My E-Commerce App</Text>
    </Box>
  );
}