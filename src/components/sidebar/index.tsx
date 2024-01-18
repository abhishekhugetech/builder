import { css } from "@emotion/react";
import { FC, useState } from "react";
import NodeListRenderer, { NodeTypeProps } from "./nodes";
import CustomizationEditor from "./editor";
import { ChevronLeft } from "lucide-react";
import { CustomizationData } from "../clothing/typings";

interface SidebarProps {
  nodes: NodeTypeProps[];
  onCustomizationUpdated?: (customization : CustomizationData) => void
}

const Sidebar: FC<SidebarProps> = ({ nodes, onCustomizationUpdated }) => {
  const [selectedNodes, setSelectedNodes] = useState(Array<NodeTypeProps>())
  const onDeselect = () => {
    setSelectedNodes([]);
  };

  const isSingleNodeSelected = selectedNodes.length === 1;

  // If a single node selected, show the node editor, Editor is a self contained
  // component, it will handle the node type and show the appropriate editor
  if (isSingleNodeSelected) {
    const selectedNode = selectedNodes[0];

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
            display: flex;
            align-items: center;
          `}
        >
          <ChevronLeft
            css={css`
              cursor: pointer;
              padding: 4px;
              border-radius: 4px;

              &:hover {
                background: lightblue;
              }
            `}
            size={24}
            onClick={onDeselect}
          />
          <p
            css={css`
              margin-left: 8px;
            `}
          >{selectedNode.data.type} Customization </p>
        </div>
        <CustomizationEditor data={selectedNode.data} onUpdated={onCustomizationUpdated} />
      </div>
    );
  }

  // If none selected, then we can show the Nodes panel so user can use them
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
        <h2>Customize</h2>
        <br />
        Customize the details and color to make the Hoodie design your own. All items automatically come with a size and care label. These are included in the price.
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
          <NodeListRenderer 
          setCustomization={setSelectedNodes}
          key={node.id} {...node} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
