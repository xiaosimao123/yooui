const App = `import {Snippet} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet size="sm">npm install @simao234430/react</Snippet>
      <Snippet size="md">npm install @simao234430/react</Snippet>
      <Snippet size="lg">npm install @simao234430/react</Snippet>
    </div>  
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
