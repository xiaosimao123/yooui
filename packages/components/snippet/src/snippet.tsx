import {ReactNode, useCallback, useMemo, cloneElement} from "react";
import {forwardRef} from "@simao234430/system";
import {Tooltip} from "@simao234430/tooltip";
import {CopyLinearIcon, CheckLinearIcon} from "@simao234430/shared-icons";
import {Button} from "@simao234430/button";
import {objectToDeps} from "@simao234430/shared-utils";

import {useSnippet, UseSnippetProps} from "./use-snippet";

export interface SnippetProps extends UseSnippetProps {}

const Snippet = forwardRef<"div", SnippetProps>((props, ref) => {
  const {
    Component,
    domRef,
    preRef,
    children,
    slots,
    classNames,
    copied,
    copyIcon = <CopyLinearIcon />,
    checkIcon = <CheckLinearIcon />,
    symbolBefore,
    disableCopy,
    disableTooltip,
    hideSymbol,
    hideCopyButton,
    tooltipProps,
    isMultiLine,
    onCopy,
    getSnippetProps,
    getCopyButtonProps,
  } = useSnippet({...props, ref});

  const TooltipContent = useCallback(
    ({children}: {children?: ReactNode}) => (
      <Tooltip {...tooltipProps} isDisabled={copied || tooltipProps.isDisabled}>
        {children}
      </Tooltip>
    ),
    [objectToDeps(tooltipProps)],
  );

  const contents = useMemo(() => {
    if (hideCopyButton) {
      return null;
    }

    const clonedCheckIcon = checkIcon && cloneElement(checkIcon, {className: slots.checkIcon()});
    const clonedCopyIcon = copyIcon && cloneElement(copyIcon, {className: slots.copyIcon()});

    const copyButton = (
      <Button {...getCopyButtonProps()}>
        {clonedCheckIcon}
        {clonedCopyIcon}
      </Button>
    );

    if (disableTooltip) {
      return copyButton;
    }

    return <TooltipContent>{copyButton}</TooltipContent>;
  }, [
    slots,
    classNames?.copyButton,
    copied,
    checkIcon,
    copyIcon,
    onCopy,
    TooltipContent,
    disableCopy,
    disableTooltip,
    hideCopyButton,
  ]);

  const preContent = useMemo(() => {
    if (isMultiLine && children && Array.isArray(children)) {
      return (
        <div className={slots.content({class: classNames?.content})}>
          {children.map((t, index) => (
            <pre key={`${index}-${t}`} className={slots.pre({class: classNames?.pre})}>
              {!hideSymbol && (
                <span className={slots.symbol({class: classNames?.symbol})}>{symbolBefore}</span>
              )}
              {t}
            </pre>
          ))}
        </div>
      );
    }

    return (
      <pre ref={preRef} className={slots.pre({class: classNames?.pre})}>
        {!hideSymbol && (
          <span className={slots.symbol({class: classNames?.symbol})}>{symbolBefore}</span>
        )}
        {children}
      </pre>
    );
  }, [children, hideSymbol, isMultiLine, symbolBefore, classNames?.pre, slots]);

  return (
    <Component ref={domRef} {...getSnippetProps()}>
      {preContent}
      {contents}
    </Component>
  );
});


Snippet.displayName = "YooUI.Snippet";

export default Snippet;
