import {forwardRef} from "@simao234430/system-rsc";

import {UseBadgeProps, useBadge} from "./use-badge";

export interface BadgeProps extends UseBadgeProps {}

const Badge = forwardRef<"span", BadgeProps>((props, ref) => {
  const {Component, children, content, slots, classNames, getBadgeProps} = useBadge({
    ...props,
  });

  return (
    <div className={slots.base({class: classNames?.base})}>
      {children}
      <Component ref={ref} {...getBadgeProps()}>
        {content}
      </Component>
    </div>
  );
});

Badge.displayName = "YooUI.Badge";

export default Badge;
