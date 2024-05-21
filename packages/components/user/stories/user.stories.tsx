import React from "react";
import {Meta} from "@storybook/react";
import { user } from "@simao234430/theme";

import { User, UserProps } from "../src";

export default {
  title: "Components/User",
  component: User,
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
} as Meta<typeof User>;

const defaultProps = {
  ...user.defaultVariants,
};

const Template = (args: UserProps) => <User {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
