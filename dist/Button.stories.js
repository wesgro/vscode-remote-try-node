import React from "react";
import { Button, ResponsiveButton } from "./Button";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => React.createElement(Button, { ...args });
const Template2 = (args) => (React.createElement(ResponsiveButton, { size: { xs: "small", sm: "small", md: "medium", lg: "large" }, ...args }));
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: "Button",
};
export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
};
export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
};
export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
};
export const Responsive = Template2.bind({});
Responsive.args = {
    label: "ButtonResponsive",
};
