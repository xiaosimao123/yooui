import {HTMLYooUIProps} from "@simao234430/system";
import {Column} from "@react-stately/table";
import {SpectrumColumnProps} from "@react-types/table";

export type TableColumnProps<T> = Omit<SpectrumColumnProps<T>, "showDivider"> &
  Omit<HTMLYooUIProps<"th">, keyof SpectrumColumnProps<T>>;

const TableColumn = Column as <T>(props: TableColumnProps<T>) => JSX.Element;

export default TableColumn;
