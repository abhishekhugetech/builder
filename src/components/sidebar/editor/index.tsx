import ImageNodeDataEditor from "./nodes/image";
import TextNodeDataEditor from "./nodes/text";
import { Nodes, NodeTypes } from "../../flow-zone/nodes/typings";
import { FC } from "react";

const NodeDataEditor: FC<{ node: Nodes }> = ({ node }) => {
  switch (node.type) {
    case NodeTypes.Image:
      return <ImageNodeDataEditor {...node} />;
    case NodeTypes.Text:
      return <TextNodeDataEditor {...node} />;
    default:
      return null;
  }
};

export default NodeDataEditor;
