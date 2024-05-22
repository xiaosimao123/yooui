const App = `import {Textarea} from "@simao234430/react";

export default function App() {
  return (
    <Textarea
      label="Description"
      variant="bordered"
      placeholder="Enter your description"
      disableAnimation
      disableAutosize
      classNames={{
        base: "max-w-xs",
        input: "resize-y min-h-[40px]",
      }}
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
