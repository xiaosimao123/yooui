const App = `import {Pagination} from "@simao234430/react";

export default function App() {
  return (
    <Pagination color="warning" initialPage={3} total={10} />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
