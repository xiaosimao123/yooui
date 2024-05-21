import {forwardRef, HTMLYooUIProps} from "@simao234430/system";
import {useDOMRef} from "@simao234430/react-utils";

export interface PaginationCursorProps extends HTMLYooUIProps<"span"> {
  /**
   * The current active page.
   */
  activePage?: number;
}

const PaginationCursor = forwardRef<"span", PaginationCursorProps>((props, ref) => {
  const {as, activePage, ...otherProps} = props;

  const Component = as || "span";
  const domRef = useDOMRef(ref);

  return (
    <Component ref={domRef} aria-hidden={true} {...otherProps}>
      {activePage}
    </Component>
  );
});

PaginationCursor.displayName = "YooUI.PaginationCursor";

export default PaginationCursor;
