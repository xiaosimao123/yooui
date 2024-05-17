import React from "react";
import {Meta} from "@storybook/react";
import { code } from "@simao234430/theme";

import { Code, CodeProps } from "../src";

export default {
  title: "Components/Code",
  component: Code,
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
} as Meta<typeof Code>;

const defaultProps = {
  ...code.defaultVariants,
};

const Template = (args: CodeProps) => <Code {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
