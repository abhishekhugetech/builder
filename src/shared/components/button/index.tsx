import { FC, MouseEventHandler, ReactNode } from "react";
import { css } from "@emotion/react";

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      css={css`
        padding: 6px 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #fff;
        cursor: pointer;

        &:hover {
          background: #eee;
        }
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
