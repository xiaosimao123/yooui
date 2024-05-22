const App = `import {DateInput} from "@simao234430/react";
import {parseZonedDateTime} from "@internationalized/date";

export default function App() {
  return (
    <div className="w-full max-w-xl flex flex-row gap-4">
      <DateInput
        label="Appointment time"
        hideTimeZone
        defaultValue={parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]")}
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