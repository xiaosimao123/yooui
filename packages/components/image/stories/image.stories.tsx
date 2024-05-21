import React from "react";
import {Meta} from "@storybook/react";
import { image } from "@simao234430/theme";

import { Image, ImageProps } from "../src";

export default {
  title: "Components/Image",
  component: Image,
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
} as Meta<typeof Image>;

const defaultProps = {
  ...image.defaultVariants,
};

const Template = (args: ImageProps) => <Image {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
