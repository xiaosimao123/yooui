import React from "react";
import {Meta} from "@storybook/react";
import { scroll-shadow } from "@simao234430/theme";

import { ScrollShadow, ScrollShadowProps } from "../src";

export default {
  title: "Components/ScrollShadow",
  component: ScrollShadow,
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
} as Meta<typeof ScrollShadow>;

const defaultProps = {
  ...scroll-shadow.defaultVariants,
};

const Template = (args: ScrollShadowProps) => <ScrollShadow {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
