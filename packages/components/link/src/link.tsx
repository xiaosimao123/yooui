import {forwardRef} from "@simao234430/system";
import {LinkIcon} from "@simao234430/shared-icons";
import {linkAnchorClasses} from "@simao234430/theme";

import {UseLinkProps, useLink} from "./use-link";

 
export interface LinkProps extends UseLinkProps {}

const Link = forwardRef<"a", LinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ref,
    ...props,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

Link.displayName = "YooUI.Link";

export default Link;
