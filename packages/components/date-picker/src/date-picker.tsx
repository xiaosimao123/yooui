import type {DateValue} from "@internationalized/date";

import {ForwardedRef, ReactElement, Ref, useMemo} from "react";
import {cloneElement, isValidElement} from "react";
import {forwardRef} from "@simao234430/system";
import {Button} from "@simao234430/button";
import {DateInput, TimeInput} from "@simao234430/date-input";
import {FreeSoloPopover} from "@simao234430/popover";
import {Calendar} from "@simao234430/calendar";
import {AnimatePresence} from "framer-motion";
import {CalendarBoldIcon} from "@simao234430/shared-icons";

import {UseDatePickerProps, useDatePicker} from "./use-date-picker";

export interface Props<T extends DateValue> extends UseDatePickerProps<T> {}

function DatePicker<T extends DateValue>(props: Props<T>, ref: ForwardedRef<HTMLDivElement>) {
  const {
    state,
    endContent,
    selectorIcon,
    showTimeField,
    disableAnimation,
    isCalendarHeaderExpanded,
    getDateInputProps,
    getPopoverProps,
    getTimeInputProps,
    getSelectorButtonProps,
    getSelectorIconProps,
    getCalendarProps,
    CalendarTopContent,
    CalendarBottomContent,
  } = useDatePicker<T>({...props, ref});

  const selectorContent = isValidElement(selectorIcon) ? (
    cloneElement(selectorIcon, getSelectorIconProps())
  ) : (
    <CalendarBoldIcon {...getSelectorIconProps()} />
  );

  const calendarBottomContent = useMemo(() => {
    if (isCalendarHeaderExpanded) return null;

    return showTimeField ? (
      <>
        <TimeInput {...getTimeInputProps()} />
        {CalendarBottomContent}
      </>
    ) : (
      CalendarBottomContent
    );
  }, [state, showTimeField, CalendarBottomContent, isCalendarHeaderExpanded]);

  const calendarTopContent = useMemo(() => {
    if (isCalendarHeaderExpanded) return null;

    return CalendarTopContent;
  }, [showTimeField, CalendarTopContent, isCalendarHeaderExpanded]);

  const popoverContent = state.isOpen ? (
    <FreeSoloPopover {...getPopoverProps()}>
      <Calendar
        {...getCalendarProps()}
        bottomContent={calendarBottomContent}
        topContent={calendarTopContent}
      />
    </FreeSoloPopover>
  ) : null;

  return (
    <>
      <DateInput
        {...getDateInputProps()}
        endContent={<Button {...getSelectorButtonProps()}>{endContent || selectorContent}</Button>}
      />
      {disableAnimation ? popoverContent : <AnimatePresence>{popoverContent}</AnimatePresence>}
    </>
  );
}

DatePicker.displayName = "YooUI.DatePicker";

export type DatePickerProps<T extends DateValue = DateValue> = Props<T> & {ref?: Ref<HTMLElement>};

// forwardRef doesn't support generic parameters, so cast the result to the correct type
export default forwardRef(DatePicker) as <T extends DateValue>(
  props: DatePickerProps<T>,
) => ReactElement;
