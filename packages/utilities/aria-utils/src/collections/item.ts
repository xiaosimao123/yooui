export {Item as BaseItem} from "@react-stately/collections";
import {ItemProps as BaseItemProps} from "@react-types/shared";
import {HTMLYooUIProps, As} from "@simao234430/system";

/**
 * A modified version of the ItemProps from @react-types/shared, with the addition of the NextUI props.
 *
 */
export type ItemProps<Type extends As = "div", T extends object = {}> = BaseItemProps<T> &
  HTMLYooUIProps<Type>;
