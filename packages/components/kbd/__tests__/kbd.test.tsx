import * as React from "react";
import {render} from "@testing-library/react";

import { Kbd } from "../src";

describe("Kbd", () => {
  it("should render correctly", () => {
   const wrapper = render(<Kbd />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Kbd ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
