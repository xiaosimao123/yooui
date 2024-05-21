import type {ButtonProps} from "@simao234430/button";
import type {CalendarDate} from "@internationalized/date";

import {HTMLYooUIProps} from "@simao234430/system";
import {useDateFormatter} from "@react-aria/i18n";
import {m} from "framer-motion";
import {Button} from "@simao234430/button";
import {useCallback} from "react";

import {slideVariants} from "./calendar-transitions";
import {ChevronDownIcon} from "./chevron-down";
import {useCalendarContext} from "./calendar-context";

export interface CalendarHeaderProps extends HTMLYooUIProps<"header"> {
  direction: number;
  date: CalendarDate;
  currentMonth: CalendarDate;
  buttonPickerProps?: ButtonProps;
}

export function CalendarHeader(props: CalendarHeaderProps) {
  const {direction, date, currentMonth, buttonPickerProps} = props;

  const {
    state,
    slots,
    headerRef,
    showMonthAndYearPickers,
    isHeaderExpanded,
    setIsHeaderExpanded,
    disableAnimation,
    classNames,
  } = useCalendarContext();

  const monthAndYearDateFormatter = useDateFormatter({
    month: "long",
    era:
      currentMonth.calendar.identifier === "gregory" && currentMonth.era === "BC"
        ? "short"
        : undefined,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone,
    year: "numeric",
  });

  const monthDateContent = monthAndYearDateFormatter.format(date.toDate(state.timeZone));

  const headerTitle = (
    <>
      {/* // We have a visually hidden heading describing the entire visible range,
          // and the calendar itself describes the individual month
          // so we don't need to repeat that here for screen reader users. */}
      {disableAnimation ? (
        <span
          key={currentMonth.month}
          aria-hidden={true}
          className={slots?.title({class: classNames?.title})}
          data-slot="title"
        >
          {monthDateContent}
        </span>
      ) : (
        <m.span
          key={currentMonth.month}
          animate="center"
          aria-hidden={true}
          className={slots?.title({class: classNames?.title})}
          custom={direction}
          data-slot="title"
          exit="exit"
          initial="enter"
          variants={isHeaderExpanded ? {} : slideVariants}
        >
          {monthDateContent}
        </m.span>
      )}
    </>
  );

  const headerProps = {
    ref: headerRef,
    className: slots?.header({class: classNames?.header}),
    "data-slot": "header",
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // Escape key
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        // Close the month and year pickers
        setIsHeaderExpanded?.(false);
      }
    },
    [setIsHeaderExpanded],
  );

  return showMonthAndYearPickers ? (
    <Button
      {...headerProps}
      disableAnimation={disableAnimation}
      endContent={<ChevronDownIcon className="chevron-icon" />}
      onKeyDown={handleKeyDown}
      {...buttonPickerProps}
    >
      {headerTitle}
    </Button>
  ) : (
    <header {...headerProps}>{headerTitle}</header>
  );
}
