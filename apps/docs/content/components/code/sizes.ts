const App = `import {Code} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Code size="sm">npm install @simao234430/react</Code>
      <Code size="md">npm install @simao234430/react</Code>
      <Code size="lg">npm install @simao234430/react</Code>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
