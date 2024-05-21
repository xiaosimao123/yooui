import {forwardRef, HTMLYooUIProps} from "@simao234430/system";
import {useDOMRef} from "@simao234430/react-utils";
import {clsx} from "@simao234430/shared-utils";

import {useCardContext} from "./card-context";

const CardBody = forwardRef<"div", HTMLYooUIProps<"div">>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const bodyStyles = clsx(classNames?.body, className);

  return (
    <Component ref={domRef} className={slots.body?.({class: bodyStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardBody.displayName = "YooUI.CardBody";

export default CardBody;
