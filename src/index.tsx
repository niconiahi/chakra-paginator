import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/core";

// components
import Demo from "./Demo";

// styles
import "lib/styles.css";

const App = () => (
  <ChakraProvider resetCSS>
    <Demo />
  </ChakraProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
