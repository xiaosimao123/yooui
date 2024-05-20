import React from "react";
import {Meta} from "@storybook/react";
import { dropdown } from "@simao234430/theme";

import { Dropdown, DropdownProps } from "../src";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
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
} as Meta<typeof Dropdown>;

const defaultProps = {
  ...dropdown.defaultVariants,
};

const Template = (args: DropdownProps) => <Dropdown {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
