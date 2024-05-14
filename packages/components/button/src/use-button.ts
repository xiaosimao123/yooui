import type { ButtonVariantProps } from "@simao234430/theme";

import {HTMLYooUIProps,mapPropsVariants} from "@simao234430/system";
import { button } from "@simao234430/theme";
import {ReactRef, useDOMRef} from "@simao234430/react-utils";
import {objectToDeps} from "@simao234430/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLYooUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseButtonProps = Props & ButtonVariantProps;

export function useButton(originalProps: UseButtonProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, button.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
  () =>
    button({
      ...variantProps,
      className,
    }),
  [objectToDeps(variantProps), className],
);

  return {Component, styles, domRef, ...otherProps};
}

export type UseButtonReturn = ReturnType<typeof useButton>;
