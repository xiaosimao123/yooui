const App = `import {Calendar} from "@simao234430/react";

export default function App() {
  return (
    <Calendar 
      aria-label="Date (Visible Month)" 
      visibleMonths={3} 
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
