const App = `import {Avatar, AvatarIcon} from "@simao234430/react";

export default function App() {
  return (
    <div className="flex items-center">
      <Avatar
        icon={<AvatarIcon />}
        classNames={{
          base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
          icon: "text-black/80",
        }}
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
