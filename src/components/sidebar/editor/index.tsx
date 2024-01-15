import PrintNodeDataEditor from "./nodes/print";
import ColorNodeDataEditor from "./nodes/color";
import NeckLabelNodeDataEditor from "./nodes/neck_label";
import { CustomizationData, CustomizationTypes } from "../../clothing/typings";
import { FC } from "react";

// A component which renders the specific editor for the selected node
const NodeDataEditor: FC<{ node: CustomizationData }> = ({ node }) => {

  // Individual node data editors handle their own state and save it as needed
  switch (node.title) {
    case CustomizationTypes.Print:
      return <PrintNodeDataEditor {...node} />;
      case CustomizationTypes.Color:
        return <ColorNodeDataEditor {...node} />;
      case CustomizationTypes.NeckLabel:
        return <NeckLabelNodeDataEditor {...node} />;
    default:
      return null;
  }
};

export default NodeDataEditor;
