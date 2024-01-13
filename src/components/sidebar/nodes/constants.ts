import { FileImage, FileText } from "lucide-react";
import { NodeTypes } from "../../flow-zone/nodes/typings";

export const labelsMap = {
  [NodeTypes.Color]: "Color",
  [NodeTypes.Print]: "Print",
  [NodeTypes.NeckLabel]: "Neck Label",
};

export const iconsMap = {
  [NodeTypes.Color]: FileText,
  [NodeTypes.Print]: FileImage,
  [NodeTypes.NeckLabel]: FileImage,
};

export const nodeDefaultStates = {
  [NodeTypes.Color]: {
    data: { 
      title: "Color",
      description: "Choose from our selection of in-stock colors for the fastest delivery.",
      colors: [],
      selectedColor: null,
     },
  },
  [NodeTypes.Print]: {
    data: {
      title: "Print",
      description: "Add the print of your choice. Please note that the print has to be placed in the printable area.",
      front: null,
      back: null,
    },
  },
  [NodeTypes.NeckLabel]: {
    data: {
      title: "Neck Label",
      description: "Add your own personalized neck label.",
      label: null,
    },
  },
};
