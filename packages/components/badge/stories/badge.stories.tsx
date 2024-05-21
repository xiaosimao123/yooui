import React from "react";
import {Meta} from "@storybook/react";
import { badge } from "@simao234430/theme";

import { Badge, BadgeProps } from "../src";

export default {
  title: "Components/Badge",
  component: Badge,
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
} as Meta<typeof Badge>;

const defaultProps = {
  ...badge.defaultVariants,
};

const Template = (args: BadgeProps) => <Badge {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
