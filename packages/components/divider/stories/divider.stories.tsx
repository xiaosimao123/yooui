import React from "react";
import {Meta} from "@storybook/react";
import { divider } from "@simao234430/theme";

import { Divider, DividerProps } from "../src";

export default {
  title: "Components/Divider",
  component: Divider,
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
} as Meta<typeof Divider>;

const defaultProps = {
  ...divider.defaultVariants,
};

const Template = (args: DividerProps) => <Divider {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
