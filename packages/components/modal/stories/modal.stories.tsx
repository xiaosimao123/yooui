import React from "react";
import {Meta} from "@storybook/react";
import { modal } from "@simao234430/theme";

import { Modal, ModalProps } from "../src";

export default {
  title: "Components/Modal",
  component: Modal,
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
} as Meta<typeof Modal>;

const defaultProps = {
  ...modal.defaultVariants,
};

const Template = (args: ModalProps) => <Modal {...args} />;


export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  }
}
