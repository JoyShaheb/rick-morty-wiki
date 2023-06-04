import React, { ChangeEvent, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";
import { action } from "@storybook/addon-actions";

const meta = {
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["outlined", "standard", "filled"],
      },
    },
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("");
    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value);
    return <SearchBar {...args} value={value} onChange={onChange} />;
  },
  args: {
    placeholder: "Search",
    title: "Search",
    label: "Search",
    value: "",
    onChange: (e) => console.log(e.target.value),
    variant: "outlined",
  },
};
