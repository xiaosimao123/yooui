import {renderHook} from "@testing-library/react-hooks";

import { useAriaButton } from "../src";

describe("useAriaButton", () => {
  it("should work correctly", () => {
    const {result} = renderHook(() => useAriaButton());

    // Add your test here
  });
});
