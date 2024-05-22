const App = `import {Link} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Link isExternal href="https://github.com/nextui-org/nextui">
        External Link
      </Link>
      <Link
        isExternal
        href="https://github.com/nextui-org/nextui"
        showAnchorIcon
      >
        External Link Anchor
      </Link>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
