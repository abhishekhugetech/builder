import { Node } from "reactflow";

export enum NodeTypes {
  Color = "color",
  Print = "print",
  NeckLabel = "neckLabel",
}

interface ClothColor {
  name: string;
  id: string;
  color: string;
  front: string;
  back: string;
}

export interface ColorNodeData {
  title: string;
  description: string;
  colors: Array<ClothColor>;
  selectedColor: ClothColor;
}

export function getDefaultColorNode ()   {
  const colors = [{
  name: "Some color",
  id: "some_color_id",
  color: "green",
  front: "https://google.com",
  back: "https://google.com",
  }]
  return {
    title: "Color",
    description: "Change color desc",
    colors: colors,
    selectedColor: colors[0],
  }
}

interface ClothPrint {
  printImageFormat: string;
  printImageURL: string;
  widthCM: string; 
  Placement: string;
}

export interface PrintNodeData {
  title: string;
  description: string;
  front: ClothPrint;
  back: ClothPrint;
}

export function getDefaultPrintNode ()   {
  return {
    title: "Color",
    description: "Change color desc",
    front: {
  printImageFormat: "string",
  printImageURL: "string",
  widthCM: "string",
  Placement: "string",
    },
    back: {
      printImageFormat: "string",
      printImageURL: "string",
      widthCM: "string",
      Placement: "string",
        },
  }
}

interface ClothLabel {
  labelImageFormat: string;
  labelImageURL: string;
  labelSize: string; 
  labelPrintSize: string;
}

export interface NeckLabelNodeData {
  title: string;
  description: string;
  label: ClothLabel
}

export function getDefaultNeckLabelNode ()   {
  return {
    title: "Color",
    description: "Change color desc",
    label: {
      labelImageFormat: "",
      labelImageURL: "",
      labelSize: "",
      labelPrintSize: "",
    },
  }
}

interface Cloth{
  id: string;
  name: string;
  colors: Array<ColorNodeData>;
  print: PrintNodeData;
}

export interface ColorNode extends Node<ColorNodeData, NodeTypes.Color> {
  type: NodeTypes.Color;
}

export interface PrintNode extends Node<PrintNodeData, NodeTypes.Print> {
  type: NodeTypes.Print;
}

export interface NeckLabelNode extends Node<NeckLabelNodeData, NodeTypes.NeckLabel> {
  type: NodeTypes.NeckLabel;
}

export type Nodes = ColorNode | PrintNode | NeckLabelNode;

export type NodeData = ColorNodeData | PrintNodeData | NeckLabelNodeData;
