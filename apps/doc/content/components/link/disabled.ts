const App = `import {Link} from "@simao234430/react";

export default function App() {
  return (
    <Link href="#" isDisabled>Disabled Link</Link>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
