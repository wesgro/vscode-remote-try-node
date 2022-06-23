import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { css } from '@emotion/react';
import styled from '@emotion/styled';
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
const Container = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;
import './button.css';
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    console.log(titleStyle);
    return (_jsxs("button", { css: subtitleStyle, type: "button", ...props, children: [label, _jsx(Container, { css: titleStyle })] }));
};
