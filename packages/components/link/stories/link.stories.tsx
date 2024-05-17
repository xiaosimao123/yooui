import React from "react";
import {Meta} from "@storybook/react";
import { link } from "@simao234430/theme";

import { Link, LinkProps } from "../src";

export default {
  title: "Components/Link",
  component: Link,
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
} as Meta<typeof Link>;

const defaultProps = {
  ...link.defaultVariants,
};

const Template = (args: LinkProps) => <Link {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
