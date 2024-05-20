import React from "react";
import {Meta} from "@storybook/react";
import { kbd } from "@simao234430/theme";

import { Kbd, KbdProps } from "../src";

export default {
  title: "Components/Kbd",
  component: Kbd,
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
} as Meta<typeof Kbd>;

const defaultProps = {
  ...kbd.defaultVariants,
};

const Template = (args: KbdProps) => <Kbd {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
