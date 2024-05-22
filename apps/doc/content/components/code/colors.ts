const App = `import {Code} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Code color="default">npm install @simao234430/react</Code>
      <Code color="primary">npm install @simao234430/react</Code>
      <Code color="secondary">npm install @simao234430/react</Code>
      <Code color="success">npm install @simao234430/react</Code>
      <Code color="warning">npm install @simao234430/react</Code>
      <Code color="danger">npm install @simao234430/react</Code>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
