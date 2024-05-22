const App = `import {Snippet} from "@simao234430/react";

export default function App() {
  return (
    <Snippet symbol="#" variant="bordered">npm install @simao234430/react</Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
