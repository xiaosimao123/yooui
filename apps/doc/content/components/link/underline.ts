const App = `import {Link} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Link href="#" underline="none">None</Link>
      <Link href="#" underline="hover">Hover</Link>
      <Link href="#" underline="always">Always</Link>
      <Link href="#" underline="active">Active</Link>
      <Link href="#" underline="focus">Focus</Link>
    </div>  
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
