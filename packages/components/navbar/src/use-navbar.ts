import type {NavbarVariantProps, SlotsToClasses, NavbarSlots} from "@simao234430/theme";

import {HTMLYooUIProps,mapPropsVariants} from "@simao234430/system";
import { navbar } from "@simao234430/theme";
import {ReactRef, useDOMRef} from "@simao234430/react-utils";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {mergeProps, useResizeObserver} from "@react-aria/utils";
import {useScrollPosition} from "@simao234430/use-scroll-position";
import {useControlledState} from "@react-stately/utils";
import {clsx, dataAttr, objectToDeps} from "@simao234430/shared-utils";
import {HTMLMotionProps} from "framer-motion";

interface Props extends HTMLYooUIProps<"nav"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseNavbarProps = Props & NavbarVariantProps;

export function useNavbar(originalProps: UseNavbarProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, navbar.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "nav";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
  () =>
    navbar({
      ...variantProps,
      className,
    }),
  [objectToDeps(variantProps), className],
);

  return {Component, styles, domRef, ...otherProps};
}

export type UseNavbarReturn = ReturnType<typeof useNavbar>;
