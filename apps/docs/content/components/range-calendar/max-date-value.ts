const App = `import {RangeCalendar} from "@simao234430/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function App() {
  return (
    <RangeCalendar
      aria-label="Date (Max Date Value)"
      maxValue={today(getLocalTimeZone())}
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
