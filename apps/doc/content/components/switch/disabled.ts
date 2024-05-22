const App = `import {Switch} from "@simao234430/react";

export default function App() {
  return (
    <Switch isDisabled defaultSelected>
      Automatic updates
    </Switch>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
