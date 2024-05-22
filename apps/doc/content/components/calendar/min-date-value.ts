const App = `import {Calendar} from "@simao234430/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function App() {
  return (
    <Calendar
      aria-label="Date (Min Date Value)"
      defaultValue={today(getLocalTimeZone())}
      minValue={today(getLocalTimeZone())}
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
