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
      <div className="relative flex-1 overflow-hidden">
  <div className="absolute inset-0 transition-all h-full delay-200 duration-500">
    <svg viewBox="0 0 2000 2222" xmlns="http://www.w3.org/2000/svg" className="customizer-design-preview !absolute inset-0 h-full w-full object-contain object-center transition-all delay-200 duration-500" >
      <image href="https://design.sonsupply.com/img/garments/cotton-hoodie/Hoodie_LightGreyMelange.png" x="0" y="0" width="100%" height="100%"></image>
      <image href="https://design.sonsupply.com/_nuxt/neck-label-large.7d8dfb3c.png" x="930" y="339" width="95" height="51" className=""></image>
      <image href="https://storage.googleapis.com/son_supply_backend/uploads/83667dd1-09cb-46e5-bcef-52d2764ac330-1705131675065-3491358.svg" x="937.125" y="346.125" width="80.75" height="36.75" className=""></image>
      {/* <!----> */}
      {/* <!----> */}
    </svg>
  </div>
</div>
    </div>
  )

};

export default FlowZone;
