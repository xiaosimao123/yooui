import React from "react";
import {Meta} from "@storybook/react";
import { menu } from "@simao234430/theme";

import { Menu, MenuProps } from "../src";

export default {
  title: "Components/Menu",
  component: Menu,
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
} as Meta<typeof Menu>;

const defaultProps = {
  ...menu.defaultVariants,
};

const Template = (args: MenuProps) => <Menu {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
