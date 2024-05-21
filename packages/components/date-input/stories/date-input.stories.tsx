import React from "react";
import {Meta} from "@storybook/react";
import { date-input } from "@simao234430/theme";

import { DateInput, DateInputProps } from "../src";

export default {
  title: "Components/DateInput",
  component: DateInput,
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
} as Meta<typeof DateInput>;

const defaultProps = {
  ...date-input.defaultVariants,
};

const Template = (args: DateInputProps) => <DateInput {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
