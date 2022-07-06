/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { WithResponsive } from "./with-responsive";
const buttonStyles = css({
  fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 700,
  border: 0,
  borderRadius: "3em",
  cursor: "pointer",
  display: "inline-block",
  lineHeight: 1,
});

const buttonStyleVariant = {
  primary: css`
    color: white;
    background-color: #1ea7fd;
  `,
  secondary: css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `,
};
const buttonStyleSize = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
};

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // console.log("SIZE PROP FROM BUTTON", size);
  const buttonStyle = [
    buttonStyles,
    primary ? buttonStyleVariant["primary"] : buttonStyleVariant["secondary"],
    buttonStyleSize[size],
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : undefined,
  ];
  return (
    <button css={buttonStyle} type="button" {...props}>
      {label}
    </button>
  );
};

export const ResponsiveButton = WithResponsive(Button, ["primary", "size"]);
