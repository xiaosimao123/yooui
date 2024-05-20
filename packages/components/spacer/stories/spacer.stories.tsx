import React from "react";
import {Meta} from "@storybook/react";
import { spacer } from "@simao234430/theme";

import { Spacer, SpacerProps } from "../src";

export default {
  title: "Components/Spacer",
  component: Spacer,
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
} as Meta<typeof Spacer>;

const defaultProps = {
  ...spacer.defaultVariants,
};

const Template = (args: SpacerProps) => <Spacer {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
