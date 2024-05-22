const App = `import {Image} from "@simao234430/react";

export default function App() {
  return (
    <Image
      isZoomed
      width={240}
      alt="NextUI Fruit Image with Zoom"
      src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
