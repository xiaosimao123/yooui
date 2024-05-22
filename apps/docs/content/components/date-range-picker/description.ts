const App = `import {DateRangePicker} from "@simao234430/react";

export default function App() {
  return (
    <DateRangePicker
      label="Stay duration"
      description="Please enter your stay duration"
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
