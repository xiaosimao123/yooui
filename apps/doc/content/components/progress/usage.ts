const App = `import {Progress} from "@simao234430/react";

export default function App() {
  return (
    <Progress aria-label="Loading..." value={60} className="max-w-md"/>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
