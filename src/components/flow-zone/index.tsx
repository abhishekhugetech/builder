import { css } from "@emotion/react";
import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  NodeTypes as FlowNodeTypes,
  ReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { useDrop } from "react-dnd";

import { ImageNode, TextNode } from "./nodes";
import useStore, { selector } from "./store";
import { shallow } from "zustand/shallow";
import { NodeTypes } from "./nodes/typings";

const nodeTypes: FlowNodeTypes = {
  text: TextNode,
  image: ImageNode,
};

const FlowZone = () => {
  const {
    nodes,
    onNodesChange,
    onEdgesChange,
    defaultEdgeOptions,
    onDrop,
    edges,
    onConnect,
    setSelectedNodes,
  } = useStore(selector, shallow);

  // drop ref for dropping nodes from node panel
  const [, dropRef] = useDrop({
    accept: "node",
    drop: (item: { id: string; type: NodeTypes }, monitor) =>
      onDrop(item, monitor),
  });

  const some = () => {
  const node = []
  node.push(nodes[0]  )
  setSelectedNodes(node)
  }

  return (
    <div>
    <h1>
      Hola THere this is the element
    </h1>
    <h2>
      Some other title
      <button
      onClick={some}>
        Click on me
      </button>
    </h2>
    </div>
  )

};

export default FlowZone;
