const App = `import {Spinner} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
