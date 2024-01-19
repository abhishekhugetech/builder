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
  } as ColorCustomization;
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
  } as PrintCustomization;
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
  } as NeckLabelCustomization;
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
  name: string;
  front: string;
  back: string;
}

export function getClothColors() {
  return [
    {
      color: "black",
      name: "Black",
      front: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_Black.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_Black_back.png",
    },
    {
      color: "#454545",
      name: "Dark Gray",
      front: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_DarkGreyMelange.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_DarkGreyMelange_back.png",
    },
    {
      color: "#d9d9d9",
      name: "Light Gray",
      front: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_LightGreyMelange.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_LightGreyMelange_back.png",
    },
    {
      color: "white",
      name: "White",
      front: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_White.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_White_back.png",
    },
    {
      color: "#85909c",
      name: "Blue Haze",
      front: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_BlueHaze.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_BlueHaze_back.png",
    },
  ] as Array<ClothColorPair>;
}

export interface Cloth {
  id: string;
  name: string;
  color: string;
  colors: Array<ClothColorPair>;
  customizations: ClothCutomization;
}

export function getCustomizationOptions(cloth : Cloth) {
  const allCusts = Array<CustomizationData>()
  const keys = Object.keys(cloth.customizations)

  for (const key of keys) {
    allCusts.push(cloth.customizations[key])
  }

  return allCusts;
}


export function getDefaultCloth() {
  return {
    id: "some_cloth_id",
    name: "Basic TShirt",
    color: "Black",
    colors: getClothColors(),
    customizations: {
      color: getDefaultColorCustomization(),
      print: getDefaultPrintCustomization(),
      neckLable: getDefaultNeckLabelCustomization(),
    } as ClothCutomization
  } as Cloth
}