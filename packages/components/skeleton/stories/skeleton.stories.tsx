import React from "react";
import {Meta} from "@storybook/react";
import { skeleton } from "@simao234430/theme";

import { Skeleton, SkeletonProps } from "../src";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
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
} as Meta<typeof Skeleton>;

const defaultProps = {
  ...skeleton.defaultVariants,
};

const Template = (args: SkeletonProps) => <Skeleton {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
