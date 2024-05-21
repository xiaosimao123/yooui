import React from "react";
import {Meta} from "@storybook/react";
import { select } from "@simao234430/theme";

import { Select, SelectProps } from "../src";

export default {
  title: "Components/Select",
  component: Select,
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
} as Meta<typeof Select>;

const defaultProps = {
  ...select.defaultVariants,
};

const Template = (args: SelectProps) => <Select {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
