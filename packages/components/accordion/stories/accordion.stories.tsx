import React from "react";
import {Meta} from "@storybook/react";
import { accordion } from "@simao234430/theme";

import { Accordion, AccordionProps } from "../src";

export default {
  title: "Components/Accordion",
  component: Accordion,
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
} as Meta<typeof Accordion>;

const defaultProps = {
  ...accordion.defaultVariants,
};

const Template = (args: AccordionProps) => <Accordion {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
