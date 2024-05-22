const App = `import {Snippet} from "@simao234430/react";

export default function App() {
  return (
    <Snippet>
      <span>npm install @simao234430/react</span>
      <span>yarn add @simao234430/react</span>
      <span>pnpm add @simao234430/react</span>
    </Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
