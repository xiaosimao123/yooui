const App = `import {Snippet} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet variant="bordered">npm install @simao234430/react</Snippet>
      <Snippet variant="flat" color="warning">npm install @simao234430/react</Snippet>
      <Snippet variant="solid" color="primary">npm install @simao234430/react</Snippet>
      <Snippet variant="shadow" color="secondary">npm install @simao234430/react</Snippet>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
