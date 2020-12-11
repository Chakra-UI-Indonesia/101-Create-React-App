import React from "react";
import { ChakraProvider, CSSReset, extendTheme, Text } from "@chakra-ui/react";
// components
import { Button, Breadcrumb } from "./components";
import { theme } from "./theme";

function App() {
  // const customTheme = extendTheme(theme);

  const customTheme = extendTheme(theme);

  return (
    <div>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Button value={"Button"} colorScheme={"yellow"} />
        <br />
        TEst
      </ChakraProvider>
    </div>
  );
}

export default App;
