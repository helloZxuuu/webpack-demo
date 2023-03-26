import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.less";

// console.log(process.env.NODE_ENV);
// console.log(process.env.BASE_ENV);

const root = document.getElementById("root");

root && createRoot(root).render(<App />);
