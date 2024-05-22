const App = `import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@simao234430/react";

export default function App() {
  return (
    <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
    </Table>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
