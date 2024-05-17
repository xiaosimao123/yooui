import type { Config } from "tailwindcss";
import {YooUI} from "@simao234430/theme";
// import {commonColors} from "@simao234430/theme";
const {commonColors} = require("@simao234430/theme");
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "hsl(var(--nextui-foreground))",
            maxWidth: "none",
            hr: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            "h1, h2, h3": {
              letterSpacing: "-0.025em",
            },
            h2: {
              marginTop: "1.5em",
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: "1.8em",
              lineHeight: "1.4",
            },
            h4: {
              marginTop: "2em",
              fontSize: "1.125em",
            },
            "h2 a": {
              fontSize: `${theme("fontSize.2xl")[0]} !important`,
              fontWeight: theme("fontWeight.semibold"),
              ...theme("fontSize.2xl")[1],
            },
            "h3 a": {
              fontSize: "1.25rem !important",
              fontWeight: theme("fontWeight.medium"),
            },
            "h2 small, h3 small, h4 small": {
              fontFamily: theme("fontFamily.mono").join(", "),
              color: theme("colors.slate.500"),
              fontWeight: 500,
            },
            "h2 small": {
              fontSize: theme("fontSize.lg")[0],
              ...theme("fontSize.lg")[1],
            },
            "h3 small": {
              fontSize: theme("fontSize.base")[0],
              ...theme("fontSize.base")[1],
            },
            "h4 small": {
              fontSize: theme("fontSize.sm")[0],
              ...theme("fontSize.sm")[1],
            },
            "h2, h3, h4": {
              "scroll-margin-top": "var(--scroll-mt)",
            },
            ul: {
              listStyleType: "none",
              paddingLeft: 0,
            },
            "ul > li": {
              marginTop: "0.1em",
              marginBottom: "0.1em",
              fontWeight: theme("fontWeight.normal"),
            },
            "ul > li > *:last-child": {
              marginTop: 0,
              marginBottom: 0,
            },
            "ul > li > a": {
              marginTop: "0",
              marginBottom: "0",
            },
            a: {
              fontWeight: theme("fontWeight.normal"),
            },
            "a code": {
              color: "inherit",
              fontWeight: "inherit",
            },
            strong: {
              color: "hsl(var(--nextui-strong))",
              fontWeight: theme("fontWeight.semibold"),
            },
            "a strong": {
              color: "inherit",
              fontWeight: "inherit",
            },
            kbd: {
              fontSize: "0.875em",
              fontVariantLigatures: "none",
              borderRadius: "4px",
              margin: "0 1px",
            },
            code: {
              fontWeight: theme("fontWeight.medium"),
              fontVariantLigatures: "none",
            },
            pre: {
              display: "flex",
              fontSize: theme("fontSize.sm")[0],
              backgroundColor: "transparent",
              fontWeight: theme("fontWeight.light"),
              padding: 0,
              margin: 0,
            },
            p: {
              marginTop: `${12 / 14}em`,
              marginBottom: `${12 / 14}em`,
              fontWeight: theme("fontWeight.normal"),
            },
            "pre code": {
              flex: "none",
              minWidth: "100%",
            },
            table: {
              marginTop: "0px",
              fontSize: theme("fontSize.sm")[0],
              lineHeight: theme("fontSize.sm")[1].lineHeight,
            },
            thead: {
              border: "none",
            },
            "thead th": {
              paddingTop: 0,
              fontWeight: theme("fontWeight.semibold"),
            },
            "tbody tr": {
              border: "none",
            },
            "tbody tr:last-child": {
              border: "none",
            },
            "figure figcaption": {
              textAlign: "center",
              fontStyle: "italic",
            },
            "figure > figcaption": {
              marginTop: `${12 / 14}em`,
            },
            blockquote: {
              fontWeight: theme("fontWeight.normal"),
              fontStyle: "font-normal",
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
        dark: {
          css: {
            color: "hsl(var(--nextui-default-700))",
            strong: {
              color: "hsl(var(--nextui-cyan-500))",
            },
          },
        },
        neutral: {
          css: {
            "--tw-prose-body": "hsl(var(--nextui-default-700))",
            "--tw-prose-headings": "hsl(var(--nextui-foreground))",
            "--tw-prose-lead": "hsl(var(--nextui-default-600))",
            "--tw-prose-links": "hsl(var(--nextui-default-900))",
            "--tw-prose-bold": "hsl(var(--nextui-default-900))",
            "--tw-prose-counters": "hsl(var(--nextui-default-500))",
            "--tw-prose-bullets": "hsl(var(--nextui-default-300))",
            "--tw-prose-hr": "hsl(var(--nextui-default-200))",
            "--tw-prose-quotes": "hsl(var(--nextui-default-900))",
            "--tw-prose-quote-borders": "hsl(var(--nextui-default-200))",
            "--tw-prose-captions": "hsl(var(--nextui-default-500))",
            "--tw-prose-code": "hsl(var(--nextui-default-900))",
            "--tw-prose-pre-code": "hsl(var(--nextui-default-200))",
            "--tw-prose-pre-bg": "hsl(var(--nextui-default-800))",
            "--tw-prose-th-borders": "hsl(var(--nextui-default-300))",
            "--tw-prose-td-borders": "hsl(var(--nextui-default-200))",
            "--tw-prose-invert-body": "hsl(var(--nextui-default-300))",
            "--tw-prose-invert-headings": commonColors.white,
            "--tw-prose-invert-lead": theme("twColors.neutral[400]"),
            "--tw-prose-invert-links": commonColors.white,
            "--tw-prose-invert-bold": commonColors.white,
            "--tw-prose-invert-counters": theme("twColors.neutral[400]"),
            "--tw-prose-invert-bullets": theme("twColors.neutral[600]"),
            "--tw-prose-invert-hr": theme("twColors.neutral[700]"),
            "--tw-prose-invert-quotes": theme("twColors.neutral[100]"),
            "--tw-prose-invert-quote-borders": theme("twColors.neutral[700]"),
            "--tw-prose-invert-captions": theme("twColors.neutral[400]"),
            "--tw-prose-invert-code": commonColors.white,
            "--tw-prose-invert-pre-code": "hsl(var(--nextui-default-300))",
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("twColors.neutral[600]"),
            "--tw-prose-invert-td-borders": theme("twColors.neutral[700]"),
          },
        },
      }),
 
    },
  },
  plugins: [YooUI()],
};
export default config;
