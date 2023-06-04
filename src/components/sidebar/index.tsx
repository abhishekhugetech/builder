import { css } from "@emotion/react";
import { FC, useState } from "react";
import { useOnSelectionChange } from "reactflow";
import NodeTypeRenderer, { NodeTypeProps } from "./nodes";
import { Nodes } from "../flow-zone/nodes/typings";
import { labelsMap } from "./nodes/constants";
import NodeDataEditor from "./editor";
import { ChevronLeft } from "lucide-react";
import useStore from "../flow-zone/store";

interface SidebarProps {
  nodes: NodeTypeProps[];
}

const Sidebar: FC<SidebarProps> = ({ nodes }) => {
  const [selectedNodes, setSelectedNodes] = useState<Array<Nodes>>([]);
  const changeNodeData = useStore((state) => state.changeNodeData);

  useOnSelectionChange({
    onChange: (elements) => {
      if (elements.nodes.length > 0) {
        setSelectedNodes(elements.nodes as Array<Nodes>);
      } else {
        setSelectedNodes([]);
      }
    },
  });

  const onDeselect = () => {
    setSelectedNodes((nodes) => {
      if (nodes.length === 0) return [];

      const node = nodes[0];
      changeNodeData({ id: node.id, selected: false });

      return [];
    });
  };

  const isSingleNodeSelected = selectedNodes.length === 1;
  const isMultipleNodesSelected = selectedNodes.length > 1;

  if (isMultipleNodesSelected) {
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
          Multiple nodes selected
        </div>
        <div
          css={css`
            padding: 24px 28px;
          `}
        >
          Select your keyboard keys to do actions
        </div>
      </div>
    );
  }

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
          >{`${
            selectedNode.type ? labelsMap[selectedNode.type] : "Selected"
          } Message`}</p>
        </div>
        <NodeDataEditor node={selectedNode} />
      </div>
    );
  }

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
