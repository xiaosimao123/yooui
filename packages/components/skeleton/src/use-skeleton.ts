import type { SkeletonSlots, SkeletonVariantProps, SlotsToClasses } from "@simao234430/theme";

import {HTMLYooUIProps,PropGetter,mapPropsVariants} from "@simao234430/system";
import { skeleton } from "@simao234430/theme";
import {ReactRef, useDOMRef} from "@simao234430/react-utils";
import {clsx, dataAttr, objectToDeps} from "@simao234430/shared-utils";
import {Ref, useMemo} from "react";

interface Props extends HTMLYooUIProps<"div"> {
/**
   * Ref to the DOM node.
   */
ref?: Ref<HTMLElement | null>;
/**
 * The skeleton will be visible while isLoading is `false`.
 * @default false
 */
isLoaded?: boolean;
/**
 * Classname or List of classes to change the classNames of the element.
 * if `className` is passed, it will be added to the base slot.
 *
 * @example
 * ```ts
 * <Skeleton classNames={{
 *    base:"base-classes", // skeleton wrapper
 *    content: "content-classes", // children wrapper
 * }} />
 * ```
 */
classNames?: SlotsToClasses<SkeletonSlots>;
}

export type UseSkeletonProps = Props & SkeletonVariantProps;

export function useSkeleton(originalProps: UseSkeletonProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, skeleton.variantKeys);

  const {as, children, isLoaded = false, className, classNames, ...otherProps} = props;

  const Component = as || "div";

  const slots = useMemo(
    () =>
      skeleton({
        ...variantProps,
      }),
    [objectToDeps(variantProps), children],
  );

  const baseStyles = clsx(classNames?.base, className);

  const getSkeletonProps: PropGetter = (props = {}) => {
    return {
      "data-loaded": dataAttr(isLoaded),
      className: slots.base({class: clsx(baseStyles, props?.className)}),
      ...otherProps,
    };
  };

  const getContentProps: PropGetter = (props = {}) => {
    return {
      className: slots.content({class: clsx(classNames?.content, props?.className)}),
    };
  };

  return {Component, children, slots, classNames, getSkeletonProps, getContentProps};
}

export type UseSkeletonReturn = ReturnType<typeof useSkeleton>;