import {forwardRef, HTMLYooUIProps} from "@simao234430/system";
import {useDOMRef} from "@simao234430/react-utils";
import {clsx} from "@simao234430/shared-utils";

import {useNavbarContext} from "./navbar-context";

export interface NavbarBrandProps extends HTMLYooUIProps<"div"> {
  children?: React.ReactNode | React.ReactNode[];
}

const NavbarBrand = forwardRef<"div", NavbarBrandProps>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useNavbarContext();

  const styles = clsx(classNames?.brand, className);

  return (
    <Component ref={domRef} className={slots.brand?.({class: styles})} {...otherProps}>
      {children}
    </Component>
  );
});

NavbarBrand.displayName = "YooUI.NavbarBrand";

export default NavbarBrand;
