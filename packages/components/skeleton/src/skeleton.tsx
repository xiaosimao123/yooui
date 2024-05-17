import {forwardRef} from "@simao234430/system";

import { UseSkeletonProps, useSkeleton } from "./use-skeleton";
export interface SkeletonProps extends UseSkeletonProps {}

const Skeleton = forwardRef<"div", SkeletonProps>((props, ref) => {
  const {Component, children, getSkeletonProps, getContentProps} = useSkeleton({...props});

  return (
    <Component ref={ref} {...getSkeletonProps()}>
      <div {...getContentProps()}>{children}</div>
    </Component>
  );
});

Skeleton.displayName = "YooUI.Skeleton";

export default Skeleton;
