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
  return {
    type: CustomizationTypes.Color,
    selectedColor: getClothColors()[0].color,
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
      printImageFormat: "svg",
      printImageURL: "https://storage.googleapis.com/son_supply_backend/uploads/83667dd1-09cb-46e5-bcef-52d2764ac330-1705131675065-3491358.svg",
      widthCM: "string",
      Placement: "string",
    },
    back: null
  };
}

export enum NeckLabelSize {
  Small = "small",
  Large = "large",
}

export enum NeckPrintSize {
  ExtraSmall = "ExtraSmall",
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  ExtraLarge = "ExtraLarge",
}

interface NeckLabel {
  labelImageFormat: string;
  labelImageURL: string;
  labelSize: NeckLabelSize;
  labelPrintSize: NeckPrintSize;
}

export interface NeckLabelCustomization {
  type: CustomizationTypes;
  label?: NeckLabel;
}

export function getDefaultNeckLabelCustomization() {
  return {
    type: CustomizationTypes.NeckLabel,
    label: {
      labelImageFormat: "svg",
      labelImageURL: "https://storage.googleapis.com/son_supply_backend/uploads/83667dd1-09cb-46e5-bcef-52d2764ac330-1705131675065-3491358.svg",
      labelSize: NeckLabelSize.Large,
      labelPrintSize: NeckPrintSize.Medium,
    },
  };
}

export interface ClothCutomization {
  color: ColorCustomization;
  print: PrintCustomization;
  neckLable: NeckLabelCustomization;
}

export type CustomizationData =
  | ColorCustomization
  | PrintCustomization
  | NeckLabelCustomization;

export interface ClothColorPair {
  color: string;
  front: string;
  back: string;
}

export function getClothColors() {
  return [
    {
      color: "black",
      front: "https://i.ibb.co/rbPPC6W/front-png-min.png",
      back: "https://i.ibb.co/cknjB10/back-png-min.png",
    },
  ];
}

export interface Cloth {
  id: string;
  name: string;
  color: string;
  colors: Array<ClothColorPair>;
  customizations: ClothCutomization;
}


export function getDefaultCloth() {
  return {
    id: "some_cloth_id",
    name: "Basic TShirt",
    color: "White",
    colors: getClothColors(),
    customizations: {
      color: getDefaultColorCustomization(),
      print: getDefaultPrintCustomization(),
      neckLabel: getDefaultNeckLabelCustomization()
    }
  }
}