import React from "react";
import {Meta} from "@storybook/react";
import { navbar } from "@simao234430/theme";

import { Navbar, NavbarProps } from "../src";

export default {
  title: "Components/Navbar",
  component: Navbar,
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
} as Meta<typeof Navbar>;

const defaultProps = {
  ...navbar.defaultVariants,
};

const Template = (args: NavbarProps) => <Navbar {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
