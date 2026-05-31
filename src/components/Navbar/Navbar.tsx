import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Cart", href: "/cart" },
  ];

  return (
    <Box bg="blue.600" px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">

        <Text fontWeight="bold">E-Commerce</Text>

        <Breadcrumb display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <BreadcrumbItem key={item.href}>
              <BreadcrumbLink href={item.href}>
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="menu"
        />
      </Flex>

      {isOpen && (
        <Stack
          display={{ base: "flex", md: "none" }}
          bg="blue.700"
          p={4}
        >
          {navItems.map((item) => (
            <Box key={item.href}>
              <a href={item.href}>{item.label}</a>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
}