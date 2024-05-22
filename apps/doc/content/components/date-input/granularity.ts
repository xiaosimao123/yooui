const App = `import {DateInput} from "@simao234430/react";
import {now, parseAbsoluteToLocal} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";

export default function App() {
  let [date, setDate] = React.useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));

  return (
    <div className="w-full max-w-xl flex flex-col items-start gap-4">
      <DateInput
        granularity="second"
        label="Date and time"
        value={date}
        onChange={setDate}
      />
      <DateInput granularity="day" label="Date" value={date} onChange={setDate} />
      <DateInput granularity="second" label="Event date" />
      <DateInput
        granularity="second"
        label="Event date"
        placeholderValue={now("America/New_York")}
      />
    </div>
  );
}`;

const AppTs = `import {DateInput} from "@simao234430/react";
import {DateValue, now, parseAbsoluteToLocal} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";

export default function App() {
  let [date, setDate] = React.useState<DateValue>(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));

  return (
    <div className="w-full max-w-xl flex flex-col items-start gap-4">
      <DateInput
        granularity="second"
        label="Date and time"
        value={date}
        onChange={setDate}
      />
      <DateInput granularity="day" label="Date" value={date} onChange={setDate} />
      <DateInput granularity="second" label="Event date" />
      <DateInput
        granularity="second"
        label="Event date"
        placeholderValue={now("America/New_York")}
      />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
  "/App.tsx": AppTs,
};

export default {
  ...react,
};
