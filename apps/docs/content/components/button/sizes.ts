const App = `import {Button} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Button size="sm">
        Small
      </Button>  
      <Button size="md">
        Medium
      </Button>  
      <Button size="lg">
        Large
      </Button>  
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
