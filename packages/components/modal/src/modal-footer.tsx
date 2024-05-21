import {forwardRef, HTMLYooUIProps} from "@simao234430/system";
import {useDOMRef} from "@simao234430/react-utils";
import {clsx} from "@simao234430/shared-utils";

import {useModalContext} from "./modal-context";

export interface ModalFooterProps extends HTMLYooUIProps<"footer"> {}

const ModalFooter = forwardRef<"footer", ModalFooterProps>((props, ref) => {
  const {as, children, className, ...otherProps} = props;

  const {slots, classNames} = useModalContext();

  const domRef = useDOMRef(ref);

  const Component = as || "footer";

  return (
    <Component
      ref={domRef}
      className={slots.footer({class: clsx(classNames?.footer, className)})}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ModalFooter.displayName = "YooUI.ModalFooter";

export default ModalFooter;
