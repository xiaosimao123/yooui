const App = `import {Pagination, Button} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex flex-col gap-5">
      <p>1 Sibling (default)</p>
      <Pagination
        total={10}
      />
      <p>2 Siblings</p>
      <Pagination
        total={10}
        siblings={2}
      />
      <p>3 Siblings</p>
      <Pagination
        total={10}
        siblings={3}
      />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
