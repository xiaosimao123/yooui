import React from "react";
import {Meta} from "@storybook/react";
import { progress } from "@simao234430/theme";

import { Progress, ProgressProps } from "../src";

export default {
  title: "Components/Progress",
  component: Progress,
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
} as Meta<typeof Progress>;

const defaultProps = {
  ...progress.defaultVariants,
};

const Template = (args: ProgressProps) => <Progress {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
