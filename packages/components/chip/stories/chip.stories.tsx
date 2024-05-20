import React from "react";
import {Meta} from "@storybook/react";
import { chip } from "@simao234430/theme";

import { Chip, ChipProps } from "../src";

export default {
  title: "Components/Chip",
  component: Chip,
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
} as Meta<typeof Chip>;

const defaultProps = {
  ...chip.defaultVariants,
};

const Template = (args: ChipProps) => <Chip {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
