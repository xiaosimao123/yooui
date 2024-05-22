const App = `import {DatePicker} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <DatePicker 
          label="Birth date"
          className="max-w-[284px]"
          isRequired
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
