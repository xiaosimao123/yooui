const App = `import {Image} from "@simao234430/react";

export default function App() {
  return (
    <Image
      isBlurred
      width={240}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      className="m-5"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};