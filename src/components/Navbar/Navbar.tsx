import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="blue.600" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold">E-Commerce</Text>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <IconButton
          display={{ md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="menu"
        />
      </Flex>

      {isOpen && (
        <Stack pb={4} display={{ md: "none" }}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Cart</Button>
        </Stack>
      )}
    </Box>
  );
}
