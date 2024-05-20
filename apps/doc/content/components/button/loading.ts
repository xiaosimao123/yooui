const App = `import {Button} from "@simao234430/react";

export default function App() {
  return (
    <Button color="primary" isLoading>
      Loading
    </Button>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
