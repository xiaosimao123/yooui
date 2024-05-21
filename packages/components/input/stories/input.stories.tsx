import React from "react";
import {Meta} from "@storybook/react";
import { input } from "@simao234430/theme";

import { Input, InputProps } from "../src";

export default {
  title: "Components/Input",
  component: Input,
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
} as Meta<typeof Input>;

const defaultProps = {
  ...input.defaultVariants,
};

const Template = (args: InputProps) => <Input {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
