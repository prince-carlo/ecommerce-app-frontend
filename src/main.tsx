import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";


const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
