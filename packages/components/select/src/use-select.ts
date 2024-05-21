import type { SelectVariantProps } from "@simao234430/theme";

import {HTMLYooUIProps,mapPropsVariants} from "@simao234430/system";
import { select } from "@simao234430/theme";
import {ReactRef, useDOMRef} from "@simao234430/react-utils";
import {objectToDeps} from "@simao234430/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLYooUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseSelectProps = Props & SelectVariantProps;

export function useSelect(originalProps: UseSelectProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, select.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
  () =>
    select({
      ...variantProps,
      className,
    }),
  [objectToDeps(variantProps), className],
);

  return {Component, styles, domRef, ...otherProps};
}

export type UseSelectReturn = ReturnType<typeof useSelect>;
