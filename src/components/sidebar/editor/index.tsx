import PrintNodeDataEditor from "./nodes/print";
import ColorNodeDataEditor from "./nodes/color";
import NeckLabelNodeDataEditor from "./nodes/neck_label";
import {
  Cloth,
  CustomizationData,
  CustomizationTypes,
} from "../../clothing/typings";
import { FC } from "react";

export interface CustomizationEditorProps {
  cloth: Cloth;
  data: CustomizationData;
  onUpdated?: (customization: CustomizationData) => void;
  onUpdateCloth?: (cloth: Cloth) => void;
}

// A component which renders the specific editor for the selected node
const CustomizationEditor: FC<CustomizationEditorProps> = (data) => {
  // Individual node data editors handle their own state and save it as needed
  switch (data.data.type) {
    case CustomizationTypes.Print:
      return <PrintNodeDataEditor key={data.data.type} {...data} />;
    case CustomizationTypes.Color:
      return <ColorNodeDataEditor key={data.data.type} {...data} />;
    case CustomizationTypes.NeckLabel:
      return <NeckLabelNodeDataEditor key={data.data.type} {...data} />;
    default:
      return null;
  }
};

export default CustomizationEditor;
