export enum CustomizationTypes {
  Color = "Color",
  Print = "Print",
  NeckLabel = "NeckLabel",
}

export interface ColorCustomization {
  type: CustomizationTypes;
  selectedColor?: string;
}

export function getDefaultColorCustomization() {
  const colors = [
    {
      name: "Some color",
      id: "some_color_id",
      color: "green",
      front: "https://google.com",
      back: "https://google.com",
    },
  ];
  return {
    type: CustomizationTypes.Color,
    colors: colors,
    selectedColor: colors[0],
  };
}

interface ClothPrint {
  printImageFormat: string;
  printImageURL: string;
  widthCM: string;
  Placement: string;
}

export interface PrintCustomization {
  type: CustomizationTypes;
  front?: ClothPrint;
  back?: ClothPrint;
}

export function getDefaultPrintCustomization() {
  return {
    type: CustomizationTypes.Print,
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
  };
}

interface ClothLabel {
  labelImageFormat: string;
  labelImageURL: string;
  labelSize: string;
  labelPrintSize: string;
}

export interface NeckLabelCustomization {
  type: CustomizationTypes;
  label?: ClothLabel;
}

export function getDefaultNeckLabelCustomization() {
  return {
    type: CustomizationTypes.NeckLabel,
    label: {
      labelImageFormat: "png",
      labelImageURL: "",
      labelSize: "",
      labelPrintSize: "",
    },
  };
}

export interface ClothCutomization {
  colors: ColorCustomization;
  print: PrintCustomization;
  neckLable: NeckLabelCustomization;
}

export type CustomizationData =
  | ColorCustomization
  | PrintCustomization
  | NeckLabelCustomization;

export interface ClothColorPair {
  color: string;
  image: string;
}

export interface SizeChart {
  sizeChartURL: string;
}

export interface Cloth {
  id: string;
  name: string;
  defaultColor: string;
  sizeChart: SizeChart;
  colors: Array<ClothColorPair>;
  customizations: ClothCutomization;
}
