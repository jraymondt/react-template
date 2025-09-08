import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>Hello, world, please dont react</h1>;

createRoot(document.getElementById("root")).render(<App />);
