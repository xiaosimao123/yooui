import * as React from "react";
import {render} from "@testing-library/react";

import { User } from "../src";

describe("User", () => {
  it("should render correctly", () => {
   const wrapper = render(<User />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<User ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
