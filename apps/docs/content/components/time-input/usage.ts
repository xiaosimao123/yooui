const App = `import {TimeInput} from "@simao234430/react";
import {Time} from "@internationalized/date";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <TimeInput label="Event Time" />
      <TimeInput label="Event Time" defaultValue={new Time(11, 45)} />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
