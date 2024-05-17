import React from "react";
import {Meta} from "@storybook/react";
import { tooltip } from "@simao234430/theme";

import { Tooltip, TooltipProps } from "../src";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
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
} as Meta<typeof Tooltip>;

const defaultProps = {
  ...tooltip.defaultVariants,
};

const Template = (args: TooltipProps) => <Tooltip {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
