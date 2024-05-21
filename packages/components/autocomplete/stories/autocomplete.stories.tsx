import React from "react";
import {Meta} from "@storybook/react";
import { autocomplete } from "@simao234430/theme";

import { Autocomplete, AutocompleteProps } from "../src";

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
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
} as Meta<typeof Autocomplete>;

const defaultProps = {
  ...autocomplete.defaultVariants,
};

const Template = (args: AutocompleteProps) => <Autocomplete {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
