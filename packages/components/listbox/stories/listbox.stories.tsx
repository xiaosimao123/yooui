import React from "react";
import {Meta} from "@storybook/react";
import { listbox } from "@simao234430/theme";

import { Listbox, ListboxProps } from "../src";

export default {
  title: "Components/Listbox",
  component: Listbox,
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
} as Meta<typeof Listbox>;

const defaultProps = {
  ...listbox.defaultVariants,
};

const Template = (args: ListboxProps) => <Listbox {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
