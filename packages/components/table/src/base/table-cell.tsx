import {HTMLYooUIProps} from "@simao234430/system";
import {Cell} from "@react-stately/table";
import {CellProps} from "@react-types/table";

export type TableCellProps = CellProps & HTMLYooUIProps<"td">;

const TableCell = Cell as (props: TableCellProps) => JSX.Element;

export default TableCell;
