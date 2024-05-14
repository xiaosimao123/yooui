import {forwardRef} from "@simao234430/system";

import { UseButtonProps, useButton } from "./use-button";

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<"div", ButtonProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useButton({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Button.displayName = "YooUI.Button";

export default Button;
