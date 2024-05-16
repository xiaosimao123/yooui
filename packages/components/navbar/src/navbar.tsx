import {forwardRef} from "@simao234430/system";

import { UseNavbarProps, useNavbar } from "./use-navbar";

export interface NavbarProps extends UseNavbarProps {}

const Navbar = forwardRef<"div", NavbarProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useNavbar({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Navbar.displayName = "YooUI.Navbar";

export default Navbar;
