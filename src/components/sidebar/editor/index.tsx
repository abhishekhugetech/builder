import PrintNodeDataEditor from "./nodes/print";
import ColorNodeDataEditor from "./nodes/color";
import NeckLabelNodeDataEditor from "./nodes/neck_label";
import { Nodes, NodeTypes } from "../../flow-zone/nodes/typings";
import { FC } from "react";

// A component which renders the specific editor for the selected node
const NodeDataEditor: FC<{ node: Nodes }> = ({ node }) => {

  // Individual node data editors handle their own state and save it as needed
  switch (node.type) {
    case NodeTypes.Print:
      return <PrintNodeDataEditor {...node} />;
      case NodeTypes.Color:
        return <ColorNodeDataEditor {...node} />;
      case NodeTypes.NeckLabel:
        return <NeckLabelNodeDataEditor {...node} />;
    default:
      return null;
  }
};

export default NodeDataEditor;
