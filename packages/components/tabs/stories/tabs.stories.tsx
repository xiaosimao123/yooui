import React from "react";
import {Meta} from "@storybook/react";
import { tabs } from "@simao234430/theme";

import { Tabs, TabsProps } from "../src";

export default {
  title: "Components/Tabs",
  component: Tabs,
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
} as Meta<typeof Tabs>;

const defaultProps = {
  ...tabs.defaultVariants,
};

const Template = (args: TabsProps) => <Tabs {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
