import { Button, Box, Text } from "@chakra-ui/react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Box borderWidth="1px" borderRadius={"lg"} p={4} _hover={{ shadow: "md" }}>
      <Text fontWeight={"bold"}>{product.name}</Text>
      <Text color="gray.600">${product.price}</Text>

      <Button mt={3} size="sm" colorScheme="blue" width="100%">
        Add to Cart
      </Button>
    </Box>
  );
}
