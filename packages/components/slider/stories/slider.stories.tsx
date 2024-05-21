import React from "react";
import {Meta} from "@storybook/react";
import { slider } from "@simao234430/theme";

import { Slider, SliderProps } from "../src";

export default {
  title: "Components/Slider",
  component: Slider,
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
} as Meta<typeof Slider>;

const defaultProps = {
  ...slider.defaultVariants,
};

const Template = (args: SliderProps) => <Slider {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
