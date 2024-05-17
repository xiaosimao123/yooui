import {forwardRef} from "@simao234430/system";

import { UseCodeProps, useCode } from "./use-code";

export interface CodeProps extends UseCodeProps {}

const Code = forwardRef<"div", CodeProps>((props, ref) => {
  const {Component, children, getCodeProps} = useCode({...props});

  return (
    <Component ref={ref} {...getCodeProps()}>
      {children}
    </Component>
  );
});
Code.displayName = "YooUI.Code";

export default Code;
