import {forwardRef} from "@simao234430/system";

import { UseSpacerProps, useSpacer } from "./use-spacer";

export interface SpacerProps extends UseSpacerProps {}

const Spacer = forwardRef<"span", SpacerProps>((props, ref) => {
  const {Component, getSpacerProps} = useSpacer({...props});

  return <Component ref={ref} {...getSpacerProps()} />;
});

Spacer.displayName = "YooUI.Spacer";

export default Spacer;
