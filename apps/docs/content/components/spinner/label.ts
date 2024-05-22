const App = `import {Spinner} from "@simao234430/react";

export default function App() {
  return (
    <Spinner label="Loading..." color="warning" />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
