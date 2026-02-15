import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Add Context Provider here */}
      <Theme appearance="dark" accentColor="red" grayColor="gray">
        <App />
        {/* <ThemePanel /> */}
      </Theme>
    </BrowserRouter>
  </StrictMode>,
);
