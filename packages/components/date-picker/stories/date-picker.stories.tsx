import React from "react";
import {Meta} from "@storybook/react";
import { date-picker } from "@simao234430/theme";

import { DatePicker, DatePickerProps } from "../src";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
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
} as Meta<typeof DatePicker>;

const defaultProps = {
  ...date-picker.defaultVariants,
};

const Template = (args: DatePickerProps) => <DatePicker {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
