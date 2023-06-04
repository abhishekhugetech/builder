import { css } from "@emotion/react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  DefaultEdgeOptions,
  Edge,
  Handle,
  MiniMap,
  NodeProps,
  NodeTypes,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { FC, useCallback } from "react";
import { MessageCircle } from "lucide-react";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 50, y: 50 },
    data: { value: "text message" },
    type: "text",
  },
  { id: "2", position: { x: 140, y: 250 }, data: { label: "2" } },
];
const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const TextNode: FC<NodeProps<{ value: string }>> = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id="target" />
      <div
        css={css`
          border-radius: 8px;
          min-width: 240px;
          border: 1px solid lightblue;
        `}
      >
        <div
          css={css`
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid lightblue;
            background: aliceblue;
            border-radius: 8px 8px 0 0;
          `}
        >
          <p>Send Message</p>
          <MessageCircle height={18} width={18} />
        </div>
        <div
          css={css`
            background: white;
            padding: 12px 16px;
            border-radius: 0 0 8px 8px;
          `}
        >
          {data.value}
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="source" />
    </>
  );
};

const nodeTypes: NodeTypes = {
  text: TextNode,
};

const FlowZone = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div css={css``}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Controls />
        <MiniMap nodeColor={"lightblue"} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default FlowZone;
