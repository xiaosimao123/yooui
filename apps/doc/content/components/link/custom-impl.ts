const App = `import {forwardRef} from "react";
import {LinkIcon} from "@simao234430/shared-icons";
import {linkAnchorClasses} from "@simao234430/theme";

import {useLink} from "@simao234430/react";

const MyLink = forwardRef((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
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

MyLink.displayName = "MyLink";

export default MyLink;`;

const AppTs = `import {forwardRef} from "react";
import {LinkIcon} from "@simao234430/shared-icons";
import {linkAnchorClasses} from "@simao234430/theme";

import {LinkProps, useLink} from "@simao234430/react";

export interface MyLinkProps extends LinkProps {}

const MyLink = forwardRef<HTMLAnchorElement, MyLinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
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

MyLink.displayName = "MyLink";

export default MyLink;`;

const react = {
  "/App.jsx": App,
};

const reactTs = {
  "/App.tsx": AppTs,
};

export default {
  ...react,
  ...reactTs,
};
