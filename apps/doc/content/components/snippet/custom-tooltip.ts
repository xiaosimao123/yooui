const App = `import {Snippet} from "@simao234430/react";

export default function App() {
  return (
    <Snippet
      tooltipProps={{
        color: "foreground",
        content: "Copy this snippet",
        disableAnimation: true,
        placement: "right",
        closeDelay: 0
      }}
    >
      npm install @simao234430/react
    </Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
