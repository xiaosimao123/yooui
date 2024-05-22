const App = `import {TimeInput} from "@simao234430/react";
import {Time} from "@internationalized/date";

export default function App() {
  return (
    <TimeInput 
      defaultValue={new Time(18)}
      maxValue={new Time(17)}
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
