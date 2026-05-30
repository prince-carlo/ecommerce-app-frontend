type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
];


import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <Box p={6}>
      <Heading>Welcome to Store</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}