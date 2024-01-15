import { css } from "@emotion/react";
import Button from "../../shared/components/button";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (saved) {
      setTimeout(() => {
        setSaved(false);
      }, 1000);
    }
  }, [saved]);

  return (
    <div
      css={css`
        padding: 16px 28px;
        background: aliceblue;
        display: flex;
        align-items: center;
        font-weight: 500;
        justify-content: space-between;
        border-bottom: 2px solid lightblue;
      `}
    >
      <p>Wearingo Clothing Workshop</p>
      <Button loading={saving} onClick={()=>{}}>
        {saved ? "Saved" : "Save"}
      </Button>
    </div>
  );
};

export default Header;
