import {Inter} from "next/font/google";
 
export const fontSans = Inter({
  variable: "--font-sans",
  adjustFontFallback: true,
  display: "optional",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  preload: true,
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// import localFont from 'next/font/local'

// export const fontSans = localFont({
//   src: [
//     {
//       path: '../public/fonts/Inter-VariableFont_slnt,wght.ttf',
   
//     },       
//   ],
//   variable: "--font-sans",
//   display: "optional",
//   fallback: [
//     "ui-sans-serif",
//     "system-ui",
//     "-apple-system",
//     "BlinkMacSystemFont",
//     '"Segoe UI"',
//     "Roboto",
//     '"Helvetica Neue"',
//     "Arial",
//     '"Noto Sans"',
//     "sans-serif",
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//     '"Noto Color Emoji"',
//   ],
//   preload: true,
//   style: "normal",
 
 
// })