import React from "react";
import {Meta} from "@storybook/react";
import { table } from "@simao234430/theme";

import { Table, TableProps } from "../src";

export default {
  title: "Components/Table",
  component: Table,
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
} as Meta<typeof Table>;

const defaultProps = {
  ...table.defaultVariants,
};

const Template = (args: TableProps) => <Table {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
