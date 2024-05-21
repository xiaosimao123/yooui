import {forwardRef} from "@simao234430/system";
import {FreeSoloPopover} from "@simao234430/popover";
import {ScrollShadow} from "@simao234430/scroll-shadow";
import {ChevronDownIcon, CloseIcon} from "@simao234430/shared-icons";
import {Listbox} from "@simao234430/listbox";
import {Button} from "@simao234430/button";
import {Input} from "@simao234430/input";
import {ForwardedRef, ReactElement, Ref} from "react";
import {AnimatePresence} from "framer-motion";

import {UseAutocompleteProps, useAutocomplete} from "./use-autocomplete";

interface Props<T> extends UseAutocompleteProps<T> {}

function Autocomplete<T extends object>(props: Props<T>, ref: ForwardedRef<HTMLInputElement>) {
  const {
    Component,
    state,
    isOpen,
    disableAnimation,
    selectorIcon = <ChevronDownIcon />,
    clearIcon = <CloseIcon />,
    endContent,
    getBaseProps,
    getSelectorButtonProps,
    getInputProps,
    getListBoxProps,
    getPopoverProps,
    getEmptyPopoverProps,
    getClearButtonProps,
    getListBoxWrapperProps,
    getEndContentWrapperProps,
  } = useAutocomplete<T>({...props, ref});

  const popoverContent = isOpen ? (
    <FreeSoloPopover {...getPopoverProps()} state={state}>
      <ScrollShadow >
        <Listbox {...getListBoxProps()} />
      </ScrollShadow>
    </FreeSoloPopover>
  ) : (
    <div {...getEmptyPopoverProps()} />
  );

  return (
    <Component {...getBaseProps()}>
      <Input
        {...getInputProps()}
        endContent={
          <div {...getEndContentWrapperProps()}>
            {endContent || <Button {...getClearButtonProps()}>{clearIcon}</Button>}
            <Button {...getSelectorButtonProps()}>{selectorIcon}</Button>
          </div>
        }
      />
      {disableAnimation ? popoverContent : <AnimatePresence>{popoverContent}</AnimatePresence>}
    </Component>
  );
}

export type AutocompleteProps<T = object> = Props<T> & {ref?: Ref<HTMLElement>};

// forwardRef doesn't support generic parameters, so cast the result to the correct type
export default forwardRef(Autocomplete) as <T = object>(
  props: AutocompleteProps<T>,
) => ReactElement;

Autocomplete.displayName = "YooUI.Autocomplete";
