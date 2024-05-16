import {renderHook} from "@testing-library/react-hooks";

import { useScrollPosition } from "../src";

describe("useScrollPosition", () => {
  it("should work correctly", () => {
    const {result} = renderHook(() => useScrollPosition());

    // Add your test here
  });
});
