import {forwardRef} from "@simao234430/system";

import { UseSelectProps, useSelect } from "./use-select";

export interface SelectProps extends UseSelectProps {}

const Select = forwardRef<"div", SelectProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useSelect({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Select.displayName = "YooUI.Select";

export default Select;
