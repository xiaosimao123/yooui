import type {InputHTMLAttributes} from "react";
import type {GroupDOMAttributes} from "@react-types/shared";
import type {DateInputReturnType, DateInputSlots, SlotsToClasses} from "@simao234430/theme";
import type {DateFieldState} from "@react-stately/datepicker";
import type {HTMLYooUIProps} from "@simao234430/system";

import {forwardRef} from "react";

import {DateInputSegment} from "./date-input-segment";

type YooUIBaseProps = Omit<HTMLYooUIProps<"div">, keyof GroupDOMAttributes | "onChange">;

export interface DateInputFieldProps extends YooUIBaseProps, GroupDOMAttributes {
  /** State for the date field. */
  state: DateFieldState;
  /** Props for the hidden input element for HTML form submission. */
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  /** DateInput classes slots. */
  slots: DateInputReturnType;
  /** DateInput classes. */
  classNames?: SlotsToClasses<DateInputSlots>;
}

export const DateInputField = forwardRef<"div", DateInputFieldProps>((props, ref) => {
  const {as, state, slots, inputProps, classNames, ...otherProps} = props;

  const Component = as || "div";

  return (
    <Component {...otherProps} ref={ref}>
      {state.segments.map((segment, i) => (
        <DateInputSegment
          key={i}
          classNames={classNames}
          segment={segment}
          slots={slots}
          state={state}
        />
      ))}
      <input {...inputProps} />
    </Component>
  );
});

DateInputField.displayName = "YooUI.DateInputField";
