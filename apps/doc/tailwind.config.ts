import type { Config } from "tailwindcss";
import {YooUI} from "@simao234430/theme";
// const {yooui} = require("@simao234430/theme/plugin");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@simao234430/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 
    },
  },
  plugins: [YooUI()],
};
export default config;
