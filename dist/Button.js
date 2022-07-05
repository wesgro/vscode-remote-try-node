/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { WithResponsive } from "./with-responsive";
const titleStyle = css({
    boxSizing: "border-box",
    width: 300,
    height: 200,
});
const subtitleStyle = css `
  box-sizing: border-box;
  width: 100px;
  height: 60px;
`;
import "./button.css";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }) => {
    console.log("SIZE PROP FROM BUTTON", size);
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    const padding = size === "small" ? "10px" : "30px";
    return (jsx("button", { css: { color: "blue", padding: padding }, type: "button", ...props }, label));
};
export const ResponsiveButton = WithResponsive(Button, ["primary", "size"]);
