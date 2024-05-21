import React from "react";
import {Meta} from "@storybook/react";
import { pagination } from "@simao234430/theme";

import { Pagination, PaginationProps } from "../src";

export default {
  title: "Components/Pagination",
  component: Pagination,
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
} as Meta<typeof Pagination>;

const defaultProps = {
  ...pagination.defaultVariants,
};

const Template = (args: PaginationProps) => <Pagination {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
