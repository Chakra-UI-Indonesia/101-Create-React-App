import React from "react";
import {
  ChakraProvider,
  CSSReset,
  theme,
  extendTheme,
  Text
} from "@chakra-ui/react";
// components
import { Button, Breadcrumb } from "./components";

const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#FF0000"
    }
  }
});

function App() {
  return (
    <div>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Text color="brand.900">Chakra UI</Text>
        <br />
        <Breadcrumb />
        <br />
        <Button />
      </ChakraProvider>
    </div>
  );
}

export default App;
