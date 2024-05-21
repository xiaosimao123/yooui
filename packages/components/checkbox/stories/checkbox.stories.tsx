import React from "react";
import {Meta} from "@storybook/react";
import { checkbox } from "@simao234430/theme";

import { Checkbox, CheckboxProps } from "../src";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
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
} as Meta<typeof Checkbox>;

const defaultProps = {
  ...checkbox.defaultVariants,
};

const Template = (args: CheckboxProps) => <Checkbox {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
