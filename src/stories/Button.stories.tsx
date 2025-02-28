import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ResponsiveButton } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: ResponsiveButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const Template2: ComponentStory<typeof ResponsiveButton> = (args) => {
  return <ResponsiveButton {...args} />;
};
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Responsive = Template2.bind({});
Responsive.args = {
  label: "Button Responsive",
  primary: { xs: false, sm: true },
  size: { xs: "large", sm: "small" },
};
// console.log("what?", Responsive.args);
