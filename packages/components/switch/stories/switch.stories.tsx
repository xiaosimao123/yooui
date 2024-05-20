import React from "react";
import {Meta} from "@storybook/react";
import { switch } from "@simao234430/theme";

import { Switch, SwitchProps } from "../src";

export default {
  title: "Components/Switch",
  component: Switch,
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
} as Meta<typeof Switch>;

const defaultProps = {
  ...switch.defaultVariants,
};

const Template = (args: SwitchProps) => <Switch {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
