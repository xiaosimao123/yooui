import * as React from "react";
import {render} from "@testing-library/react";

import { Divider } from "../src";

describe("Divider", () => {
  it("should render correctly", () => {
   const wrapper = render(<Divider />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Divider ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
