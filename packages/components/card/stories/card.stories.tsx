import React from "react";
import {Meta} from "@storybook/react";
import { card } from "@simao234430/theme";

import { Card, CardProps } from "../src";

export default {
  title: "Components/Card",
  component: Card,
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
} as Meta<typeof Card>;

const defaultProps = {
  ...card.defaultVariants,
};

const Template = (args: CardProps) => <Card {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
