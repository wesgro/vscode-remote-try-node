/** @jsx jsx */
import { css, jsx } from '@emotion/react';
const titleStyle = css({
    boxSizing: 'border-box',
    width: 300,
    height: 200
});
const subtitleStyle = css `
  box-sizing: border-box;
  width: 100px;
  height: 60px;
`;
import './button.css';
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    console.log(titleStyle);
    return (jsx("button", { css: { color: 'blue' }, type: "button", ...props }, label));
};
