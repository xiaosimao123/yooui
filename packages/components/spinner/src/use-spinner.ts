import type { SlotsToClasses, SpinnerSlots, SpinnerVariantProps } from "@simao234430/theme";

import {HTMLYooUIProps,PropGetter,mapPropsVariants} from "@simao234430/system";
import { spinner } from "@simao234430/theme";
import {ReactRef, useDOMRef} from "@simao234430/react-utils";
import {objectToDeps,clsx} from "@simao234430/shared-utils";
import {useCallback, useMemo} from "react";
 
interface Props extends HTMLYooUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
    /**
   * Spinner label, in case you passed it will be used as `aria-label`.
   */
    label?: string;
    /**
     * Classname or List of classes to change the classNames of the element.
     * if `className` is passed, it will be added to the base slot.
     *
     * @example
     * ```ts
     * <Spinner classNames={{
     *    base:"base-classes",
     *    wrapper: "wrapper-classes",
     *    circle1: "circle1-classes",
     *    circle2: "circle2-classes",
     *    label: "label-classes"
     * }} />
     * ```
     */
    classNames?: SlotsToClasses<SpinnerSlots>;
}

export type UseSpinnerProps = Props & SpinnerVariantProps;

export function useSpinner(originalProps: UseSpinnerProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, spinner.variantKeys);

  const {children, className, classNames, label: labelProp, ...otherProps} = props;

  const slots = useMemo(() => spinner({...variantProps}), [objectToDeps(variantProps)]);

  const baseStyles = clsx(classNames?.base, className);

  const label = labelProp || children;

  const ariaLabel = useMemo(() => {
    if (label && typeof label === "string") {
      return label;
    }

    return !otherProps["aria-label"] ? "Loading" : "";
  }, [children, label, otherProps["aria-label"]]);

  const getSpinnerProps = useCallback<PropGetter>(
    () => ({
      "aria-label": ariaLabel,
      className: slots.base({
        class: baseStyles,
      }),
      ...otherProps,
    }),
    [ariaLabel, slots, baseStyles, otherProps],
  );

  return {label, slots, classNames, getSpinnerProps};
}

export type UseSpinnerReturn = ReturnType<typeof useSpinner>;
