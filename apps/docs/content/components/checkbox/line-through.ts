const App = `import {Checkbox} from "@simao234430/react";

export default function App() {
  return (
    <Checkbox defaultSelected lineThrough>Option</Checkbox>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
