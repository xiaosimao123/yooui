import * as React from "react";
import {render} from "@testing-library/react";

import { Listbox } from "../src";

describe("Listbox", () => {
  it("should render correctly", () => {
   const wrapper = render(<Listbox />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Listbox ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
