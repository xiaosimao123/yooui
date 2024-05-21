import {createContext} from "@simao234430/react-utils";

import {ContextType} from "./use-checkbox-group";

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<ContextType>({
  name: "CheckboxGroupContext",
  strict: false,
});
