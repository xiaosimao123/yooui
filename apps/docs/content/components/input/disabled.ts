const App = `import {Input} from "@simao234430/react";

export default function App() {
  return (
    <Input
      isDisabled
      type="email"
      label="Email"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
