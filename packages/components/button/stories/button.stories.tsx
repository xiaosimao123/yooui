import React from "react";
import {Meta} from "@storybook/react";
import { button } from "@simao234430/theme";

import { Button, ButtonProps } from "../src";

export default {
  title: "Components/Button",
  component: Button,
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
} as Meta<typeof Button>;

const defaultProps = {
  ...button.defaultVariants,
};

const Template = (args: ButtonProps) => <Button {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
