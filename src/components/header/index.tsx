import { css } from "@emotion/react";
import Button from "../../shared/components/button";

const Header = () => {
  return (
    <div
      css={css`
        padding: 12px 18px;
        background: aliceblue;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid lightblue;
      `}
    >
      <p>React Flow Demo</p>
      <Button
        onClick={() => {
          console.log("done");
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default Header;
