import { css } from "@emotion/react";
import Button from "../../shared/components/button";
import { useCallback, useState } from "react";
import useStore from "../flow-zone/store";

const Header = () => {
  const [saving, setSaving] = useState(false);
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const onSave = useCallback(() => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 2000);
  }, [nodes, edges]);

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
      <p>React Flow Demo</p>

      <Button loading={saving} onClick={onSave}>
        Save
      </Button>
    </div>
  );
};

export default Header;
