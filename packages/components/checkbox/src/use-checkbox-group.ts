import type {CheckboxGroupSlots, SlotsToClasses} from "@simao234430/theme";
import type {AriaCheckboxGroupProps} from "@react-types/checkbox";
import type {Orientation} from "@react-types/shared";
import type {HTMLYooUIProps, PropGetter} from "@simao234430/system";
import type {ReactRef} from "@simao234430/react-utils";
import type {CheckboxGroupProps} from "@react-types/checkbox";

import {useCallback, useMemo} from "react";
import {chain, mergeProps} from "@react-aria/utils";
import {checkboxGroup} from "@simao234430/theme";
import {useCheckboxGroup as useReactAriaCheckboxGroup} from "@react-aria/checkbox";
import {CheckboxGroupState, useCheckboxGroupState} from "@react-stately/checkbox";
import {filterDOMProps, useDOMRef} from "@simao234430/react-utils";
import {clsx, safeAriaLabel} from "@simao234430/shared-utils";

import {CheckboxProps} from "./index";

interface Props extends HTMLYooUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * The axis the checkbox group items should align with.
   * @default "vertical"
   */
  orientation?: Orientation;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <CheckboxGroup classNames={{
   *    base:"base-classes",
   *    label: "label-classes",
   *    wrapper: "wrapper-classes", // checkboxes wrapper
   * }} >
   *  // checkboxes
   * </CheckboxGroup>
   * ```
   */
  classNames?: SlotsToClasses<CheckboxGroupSlots>;
  /**
   * React aria onChange event.
   */
  onValueChange?: AriaCheckboxGroupProps["onChange"];
}

export type UseCheckboxGroupProps = Omit<Props, "onChange"> &
  Omit<AriaCheckboxGroupProps, "validationBehavior"> &
  Partial<
    Pick<
      CheckboxProps,
      "color" | "size" | "radius" | "lineThrough" | "isDisabled" | "disableAnimation"
    >
  >;

export type ContextType = {
  groupState: CheckboxGroupState;
  color?: CheckboxProps["color"];
  size?: CheckboxProps["size"];
  radius?: CheckboxProps["radius"];
  isInvalid?: UseCheckboxGroupProps["isInvalid"];
  lineThrough?: CheckboxProps["lineThrough"];
  isDisabled?: CheckboxProps["isDisabled"];
  disableAnimation?: CheckboxProps["disableAnimation"];
};

export function useCheckboxGroup(props: UseCheckboxGroupProps) {
  const {
    as,
    ref,
    classNames,
    children,
    label,
    radius,
    value,
    name,
    defaultValue,
    isInvalid: isInvalidProp,
    validationState,
    size = "md",
    color = "primary",
    orientation = "vertical",
    lineThrough = false,
    isDisabled = false,
    disableAnimation = false,
    isReadOnly,
    isRequired,
    onValueChange,
    description,
    errorMessage,
    className,
    ...otherProps
  } = props;

  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const checkboxGroupProps = useMemo<CheckboxGroupProps>(() => {
    return {
      ...otherProps,
      value,
      name,
      "aria-label": safeAriaLabel(otherProps["aria-label"], label),
      defaultValue,
      isRequired,
      isReadOnly,
      orientation,
      validationBehavior: "native",
      isInvalid: validationState === "invalid" || isInvalidProp,
      onChange: chain(props.onChange, onValueChange),
    };
  }, [
    value,
    name,
    label,
    defaultValue,
    isRequired,
    isReadOnly,
    orientation,
    onValueChange,
    isInvalidProp,
    validationState,
    otherProps["aria-label"],
    otherProps,
  ]);

  const groupState = useCheckboxGroupState(checkboxGroupProps);

  const {
    labelProps,
    groupProps,
    descriptionProps,
    errorMessageProps,
    isInvalid: isAriaInvalid,
    validationErrors,
    validationDetails,
  } = useReactAriaCheckboxGroup(checkboxGroupProps, groupState);

  let isInvalid = checkboxGroupProps.isInvalid || isAriaInvalid;

  const context = useMemo<ContextType>(
    () => ({
      size,
      color,
      radius,
      lineThrough,
      isInvalid,
      isDisabled,
      disableAnimation,
      groupState,
    }),
    [
      size,
      color,
      radius,
      lineThrough,
      isDisabled,
      disableAnimation,
      isInvalid,
      groupState?.value,
      groupState?.isDisabled,
      groupState?.isReadOnly,
      groupState?.isInvalid,
      groupState?.isSelected,
    ],
  );

  const slots = useMemo(
    () => checkboxGroup({isRequired, isInvalid, disableAnimation}),
    [isRequired, isInvalid, disableAnimation],
  );

  const baseStyles = clsx(classNames?.base, className);

  const getGroupProps: PropGetter = useCallback(() => {
    return {
      ref: domRef,
      className: slots.base({class: baseStyles}),
      ...mergeProps(
        groupProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps,
        }),
      ),
    };
  }, [slots, domRef, baseStyles, groupProps, otherProps]);

  const getLabelProps: PropGetter = useCallback(() => {
    return {
      className: slots.label({class: classNames?.label}),
      ...labelProps,
    };
  }, [slots, labelProps, classNames?.label]);

  const getWrapperProps: PropGetter = useCallback(() => {
    return {
      className: slots.wrapper({class: classNames?.wrapper}),
      role: "presentation",
      "data-orientation": orientation,
    };
  }, [slots, orientation, classNames?.wrapper]);

  const getDescriptionProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        ...props,
        ...descriptionProps,
        className: slots.description({class: clsx(classNames?.description, props?.className)}),
      };
    },
    [slots, descriptionProps, classNames?.description],
  );

  const getErrorMessageProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        ...props,
        ...errorMessageProps,
        className: slots.errorMessage({class: clsx(classNames?.errorMessage, props?.className)}),
      };
    },
    [slots, errorMessageProps, classNames?.errorMessage],
  );

  return {
    Component,
    children,
    label,
    context,
    description,
    isInvalid,
    errorMessage:
      typeof errorMessage === "function"
        ? errorMessage({isInvalid, validationErrors, validationDetails})
        : errorMessage || validationErrors?.join(" "),
    getGroupProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
  };
}

export type UseCheckboxGroupReturn = ReturnType<typeof useCheckboxGroup>;
