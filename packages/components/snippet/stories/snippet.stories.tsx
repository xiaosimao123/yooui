import React from "react";
import {Meta} from "@storybook/react";
import { snippet } from "@simao234430/theme";

import { Snippet, SnippetProps } from "../src";

export default {
  title: "Components/Snippet",
  component: Snippet,
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
} as Meta<typeof Snippet>;

const defaultProps = {
  ...snippet.defaultVariants,
};

const Template = (args: SnippetProps) => <Snippet {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
