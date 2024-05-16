import React from "react";
import {Meta} from "@storybook/react";
import { spinner } from "@simao234430/theme";

import { Spinner, SpinnerProps } from "../src";

export default {
  title: "Components/Spinner",
  component: Spinner,
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
} as Meta<typeof Spinner>;

const defaultProps = {
  ...spinner.defaultVariants,
};

const Template = (args: SpinnerProps) => <Spinner {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
