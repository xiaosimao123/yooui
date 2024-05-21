import type {ContextType} from "./use-radio-group";

import {createContext} from "@simao234430/react-utils";

export const [RadioGroupProvider, useRadioGroupContext] = createContext<ContextType>({
  name: "RadioGroupContext",
  strict: false,
});
