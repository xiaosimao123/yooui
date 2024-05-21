import React from "react";
import {Meta} from "@storybook/react";
import { radio } from "@simao234430/theme";

import { Radio, RadioProps } from "../src";

export default {
  title: "Components/Radio",
  component: Radio,
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
} as Meta<typeof Radio>;

const defaultProps = {
  ...radio.defaultVariants,
};

const Template = (args: RadioProps) => <Radio {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
