import { css } from "@emotion/react";
import { FC } from "react";
import { FileImage, FileText } from "lucide-react";
import { useDrag } from "react-dnd";

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
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "node",
    item: { id, type, label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      id={id}
      ref={drag}
      css={css(
        css`
          padding: 32px 24px;
          text-align: center;
          border-radius: 4px;
          border: 1px solid lightblue;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

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
        `,
        isDragging &&
          css`
            opacity: 0.5;
            cursor: grabbing;
          `
      )}
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
          padding: 16px 28px;
          border-bottom: 1px solid lightblue;
          font-weight: 500;
        `}
      >
        Nodes
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          padding: 24px 28px;
        `}
      >
        {nodes.map((node) => (
          <NodeTypeRenderer key={node.id} {...node} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
