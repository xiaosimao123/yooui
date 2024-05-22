const App = `import {Calendar} from "@simao234430/react";

export default function App() {
  return (
    <Calendar aria-label="Date (Disabled)" isDisabled />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
