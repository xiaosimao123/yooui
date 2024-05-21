import type {DateValue} from "@internationalized/date";

import {ForwardedRef, ReactElement, Ref, useMemo} from "react";
import {cloneElement, isValidElement} from "react";
import {forwardRef} from "@simao234430/system";
import {Button} from "@simao234430/button";
import {TimeInput, DateInputGroup} from "@simao234430/date-input";
import {FreeSoloPopover} from "@simao234430/popover";
import {RangeCalendar} from "@simao234430/calendar";
import {AnimatePresence} from "framer-motion";
import {CalendarBoldIcon} from "@simao234430/shared-icons";

import DateRangePickerField from "./date-range-picker-field";
import {UseDateRangePickerProps, useDateRangePicker} from "./use-date-range-picker";

export interface Props<T extends DateValue> extends UseDateRangePickerProps<T> {}

function DateRangePicker<T extends DateValue>(props: Props<T>, ref: ForwardedRef<HTMLDivElement>) {
  const {
    state,
    slots,
    endContent,
    selectorIcon,
    showTimeField,
    classNames,
    disableAnimation,
    isCalendarHeaderExpanded,
    getDateInputGroupProps,
    getStartDateInputProps,
    getEndDateInputProps,
    getPopoverProps,
    getSeparatorProps,
    getStartTimeInputProps,
    getEndTimeInputProps,
    getSelectorButtonProps,
    getSelectorIconProps,
    getCalendarProps,
    CalendarTopContent,
    CalendarBottomContent,
  } = useDateRangePicker<T>({...props, ref});

  const selectorContent = isValidElement(selectorIcon) ? (
    cloneElement(selectorIcon, getSelectorIconProps())
  ) : (
    <CalendarBoldIcon {...getSelectorIconProps()} />
  );

  const calendarBottomContent = useMemo(() => {
    if (isCalendarHeaderExpanded) return null;

    return showTimeField ? (
      <div className={slots?.bottomContent({class: classNames?.bottomContent})}>
        <div className={slots?.timeInputWrapper({class: classNames?.timeInputWrapper})}>
          <TimeInput {...getStartTimeInputProps()} />
          <TimeInput {...getEndTimeInputProps()} />
        </div>
        {CalendarBottomContent}
      </div>
    ) : (
      CalendarBottomContent
    );
  }, [state, showTimeField, CalendarBottomContent, isCalendarHeaderExpanded]);

  const calendarTopContent = useMemo(() => {
    if (isCalendarHeaderExpanded) return null;

    return CalendarTopContent;
  }, [showTimeField, CalendarTopContent, isCalendarHeaderExpanded]);

  const popoverContent = state.isOpen ? (
    <FreeSoloPopover {...getPopoverProps()} offset={20}>
      <RangeCalendar
        {...getCalendarProps()}
        bottomContent={calendarBottomContent}
        topContent={calendarTopContent}
      />
    </FreeSoloPopover>
  ) : null;

  return (
    <>
      <DateInputGroup
        {...getDateInputGroupProps()}
        endContent={<Button {...getSelectorButtonProps()}>{endContent || selectorContent}</Button>}
      >
        <DateRangePickerField {...getStartDateInputProps()} />
        <span {...getSeparatorProps()} aria-hidden="true" role="separator">
          -
        </span>
        <DateRangePickerField {...getEndDateInputProps()} />
      </DateInputGroup>

      {disableAnimation ? popoverContent : <AnimatePresence>{popoverContent}</AnimatePresence>}
    </>
  );
}

DateRangePicker.displayName = "YooUI.DateRangePicker";

export type DateRangePickerProps<T extends DateValue = DateValue> = Props<T> & {
  ref?: Ref<HTMLElement>;
};

// forwardRef doesn't support generic parameters, so cast the result to the correct type
export default forwardRef(DateRangePicker) as <T extends DateValue>(
  props: DateRangePickerProps<T>,
) => ReactElement;
