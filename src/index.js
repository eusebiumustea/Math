import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { render } from "@testing-library/react";
createRoot(document.getElementById("root"), render(<App />));
export default App;
