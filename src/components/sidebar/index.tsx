import { css } from "@emotion/react";
import { FC } from "react";
import { FileImage, FileText } from "lucide-react";

interface NodeTypeProps {
  id: string;
  label: string;
  type: NodeTypes;
}

export enum NodeTypes {
  Text = "text",
  Image = "image",
}

const iconsMap = {
  [NodeTypes.Text]: <FileText />,
  [NodeTypes.Image]: <FileImage />,
};

const NodeTypeRenderer: FC<NodeTypeProps> = ({ id, type, label }) => {
  return (
    <div
      id={id}
      css={css`
        padding: 32px 28px;
        text-align: center;
        border-radius: 4px;
        border: 1px solid lightblue;

        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover {
          cursor: pointer;
          background: repeating-linear-gradient(
            135deg,
            #add8e610,
            #add8e630 5px,
            white 5px,
            white 10px
          );
        }
      `}
    >
      {iconsMap[type]}
      <p
        css={css`
          margin-top: 20px;
        `}
      >
        {label}
      </p>
    </div>
  );
};

interface SidebarProps {
  nodes: NodeTypeProps[];
}

const Sidebar: FC<SidebarProps> = ({ nodes }) => {
  return (
    <div
      css={css`
        border-left: 2px solid lightblue;
      `}
    >
      <div
        css={css`
          padding: 12px 18px;
          border-bottom: 1px solid lightblue;
        `}
      >
        Nodes
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding: 24px 32px;
        `}
      >
        {nodes.map((node) => (
          <NodeTypeRenderer {...node} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
