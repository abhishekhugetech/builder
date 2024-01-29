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
    <header className="sticky top-0 z-50 flex h-10 items-center justify-between border-b border-neutral-300 bg-white">
      <a href="/" className="flex h-full items-center px-4">
        <span className="text-base font-bold uppercase">
          Wearingo Workshop
          <span className="hidden md:inline"> / Design</span>
        </span>
      </a>
      <div className="flex h-full pr-2">
        <a
          // href="/contact"
          className="_menuItem_mm5em_2 mr-2 sm:!flex"
        >
          Contact
        </a>
      </div>
    </header>
  );

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
      <Button loading={saving} onClick={() => {}}>
        {saved ? "Saved" : "Save"}
      </Button>
    </div>
  );
};

export default Header;
