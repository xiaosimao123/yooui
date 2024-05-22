const App = `import {Pagination} from "@simao234430/react";

export default function App() {
  return (
    <Pagination showControls total={10} initialPage={1} />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
