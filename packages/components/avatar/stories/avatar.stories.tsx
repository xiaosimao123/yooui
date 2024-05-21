import React from "react";
import {Meta} from "@storybook/react";
import { avatar } from "@simao234430/theme";

import { Avatar, AvatarProps } from "../src";

export default {
  title: "Components/Avatar",
  component: Avatar,
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
} as Meta<typeof Avatar>;

const defaultProps = {
  ...avatar.defaultVariants,
};

const Template = (args: AvatarProps) => <Avatar {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
