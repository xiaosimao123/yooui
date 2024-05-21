import {forwardRef} from "@simao234430/system";

import {usePaginationItem, UsePaginationItemProps} from "./use-pagination-item";

export interface PaginationItemProps extends UsePaginationItemProps {}

const PaginationItem = forwardRef<"li", PaginationItemProps>((props, ref) => {
  const {Component, children, getItemProps} = usePaginationItem({...props, ref});

  return <Component {...getItemProps()}>{children}</Component>;
});

PaginationItem.displayName = "YooUI.PaginationItem";

export default PaginationItem;
