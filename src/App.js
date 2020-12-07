import React from "react";
import { ChakraProvider, CSSReset, extendTheme, Text } from "@chakra-ui/react";
// components
import { Button, Breadcrumb } from "./components";

function App() {
  return (
    <div>
      <ChakraProvider>
        <CSSReset />
        <Button value={"Button"} colorScheme={"yellow"} />
      </ChakraProvider>
    </div>
  );
}

export default App;
