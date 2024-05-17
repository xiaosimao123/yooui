import type { CodeVariantProps } from "@simao234430/theme";

import {HTMLYooUIProps,PropGetter,mapPropsVariants} from "@simao234430/system";
import { code } from "@simao234430/theme";
import {ReactRef, useDOMRef} from "@simao234430/react-utils";
import {objectToDeps} from "@simao234430/shared-utils";
import {useMemo} from "react";

export interface UseCodeProps extends HTMLYooUIProps<"code">, CodeVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export function useCode(originalProps: UseCodeProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, code.variantKeys);

  const {as, children, className, ...otherProps} = props;

  const Component = as || "code";

  const classNames = useMemo(
    () =>
      code({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  const getCodeProps: PropGetter = () => {
    return {
      className: classNames,
      ...otherProps,
    };
  };

  return {Component, children, getCodeProps};
}

export type UseCodeReturn = ReturnType<typeof useCode>;