import React from "react";
import {Meta} from "@storybook/react";
import { ripple } from "@simao234430/theme";

import { Ripple, RippleProps } from "../src";

export default {
  title: "Components/Ripple",
  component: Ripple,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Ripple>;

const defaultProps = {
  ...ripple.defaultVariants,
};

const Template = (args: RippleProps) => <Ripple {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
