const App = `import {CircularProgress} from "@simao234430/react";

export default function App() {
  return (
    <CircularProgress
      label="Speed"
      size="lg"
      value={70}
      color="success"
      formatOptions={{ style: "unit", unit: "kilometer" }}
      showValueLabel={true}
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
