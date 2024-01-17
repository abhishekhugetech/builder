import PrintNodeDataEditor from "./nodes/print";
import ColorNodeDataEditor from "./nodes/color";
import NeckLabelNodeDataEditor from "./nodes/neck_label";
import { CustomizationData, CustomizationTypes } from "../../clothing/typings";
import { FC } from "react";

export interface CustomizationEditorProps {
  data: CustomizationData;
  onUpdated?: (customization : CustomizationData) => void
}

// A component which renders the specific editor for the selected node
const CustomizationEditor: FC<CustomizationEditorProps> = (data) => {

  // Individual node data editors handle their own state and save it as needed
  switch (data.data.type) {
    case CustomizationTypes.Print:
      return <PrintNodeDataEditor {...data} />;
      case CustomizationTypes.Color:
        return <ColorNodeDataEditor {...data} />;
      case CustomizationTypes.NeckLabel:
        return <NeckLabelNodeDataEditor {...data} />;
    default:
      return null;
  }
};

export default CustomizationEditor;
