export const rootFile = `
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@simao234430/react";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="w-screen h-screen p-8 flex items-start justify-center">
        <App />
      </div>  
    </NextUIProvider>
  </React.StrictMode>
);`;

export const getHtmlFile = (theme: string, entryFile: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body class="${theme} text-foreground bg-background">
    <div id="root"></div>
    <script type="module" src="/${entryFile}"></script>
  </body>
</html>`;

export const tailwindConfig = `const { nextui } = require("@simao234430/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./node_modules/@simao234430/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};`;

export const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

export const stylesConfig = `@tailwind base;
@tailwind components;
@tailwind utilities;`;
