import { css } from "@emotion/react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  DefaultEdgeOptions,
  Edge,
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  Handle,
  MiniMap,
  Node,
  NodeProps,
  NodeTypes as FlowNodeTypes,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { FC, useCallback } from "react";
import { Image, MessageCircle } from "lucide-react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { NodeTypes } from "../sidebar";

const initialNodes: Node<any, NodeTypes>[] = [
  {
    id: "1",
    position: { x: 50, y: 50 },
    data: { value: "text message" },
    type: NodeTypes.Text,
  },
  {
    id: "2",
    position: { x: 140, y: 250 },
    data: {
      url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/paris-jaco-marx.jpg",
      caption: "Wanna get a free trip to Paris?",
    },
    type: NodeTypes.Image,
  },
];

const dummyNode = {
  [NodeTypes.Text]: {
    data: {
      value: "text message",
    },
  },
  [NodeTypes.Image]: {
    data: {
      url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/paris-jaco-marx.jpg",
      caption: "Wanna get a free trip to Paris?",
    },
  },
};

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const TextNode: FC<NodeProps<{ value: string }>> = ({
  data,
  selected,
  ...rest
}) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id="target" />
      <div
        css={css(
          css`
            border-radius: 8px;
            min-width: 240px;
            border: 1px solid lightblue;
          `,
          selected &&
            css`
              border: 1px solid coral;
            `
        )}
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

const ImageNode: FC<NodeProps<{ url: string; caption: string }>> = ({
  data,
  selected,
  ...rest
}) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id="target" />
      <div
        css={css(
          css`
            border-radius: 8px;
            min-width: 240px;
            border: 1px solid lightblue;
          `,
          selected &&
            css`
              border-color: coral;
            `
        )}
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
          <Image height={18} width={18} />
        </div>
        <div
          css={css`
            background: white;
            padding: 12px 16px;
            border-radius: 0 0 8px 8px;
          `}
        >
          <img
            css={css`
              max-width: 300px;
              border-radius: 8px;
              max-height: 300px;
              object-fit: contain;
              margin-bottom: 12px;
            `}
            src={data.url}
            alt={data.caption}
          />
          <p css={css``}>{data.caption}</p>
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="source" />
    </>
  );
};

const nodeTypes: FlowNodeTypes = {
  text: TextNode,
  image: ImageNode,
};

const FlowZone = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDrop = useCallback(
    (
      item: { id: string; type: NodeTypes },
      monitor: DropTargetMonitor<unknown, unknown>
    ) => {
      const { id, type } = item;
      const offset = monitor.getClientOffset();

      setNodes((nodes) => {
        const lastNode = nodes[nodes.length - 1];
        const x = offset?.x || lastNode.position.x + 100;
        const y = offset?.y || lastNode.position.y + 100;

        const newNode = {
          id: `${id}-${Date.now()}`,
          position: { x: x, y: y },
          data: dummyNode[type].data,
          type,
        };

        return nodes.concat(newNode);
      });
    },
    []
  );

  const onNodesDelete = useCallback(
    (deleted: Array<Node<any, NodeTypes>>) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );

  const [, dropRef] = useDrop({
    accept: "node",
    drop: (item: { id: string; type: NodeTypes }, monitor) =>
      onDrop(item, monitor),
  });

  return (
    <div css={css``}>
      <ReactFlow
        ref={dropRef}
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
