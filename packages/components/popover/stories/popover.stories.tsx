import React from "react";
import {Meta} from "@storybook/react";
import { popover } from "@simao234430/theme";

import { Popover, PopoverProps } from "../src";

export default {
  title: "Components/Popover",
  component: Popover,
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
} as Meta<typeof Popover>;

const defaultProps = {
  ...popover.defaultVariants,
};

const Template = (args: PopoverProps) => <Popover {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
