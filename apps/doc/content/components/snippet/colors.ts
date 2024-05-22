const App = `import {Snippet} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet color="default">npm install @simao234430/react</Snippet>
      <Snippet color="primary">npm install @simao234430/react</Snippet>
      <Snippet color="secondary">npm install @simao234430/react</Snippet>
      <Snippet color="success">npm install @simao234430/react</Snippet>
      <Snippet color="warning">npm install @simao234430/react</Snippet>
      <Snippet color="danger">npm install @simao234430/react</Snippet>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
