export enum CustomizationTypes {
  Color = "Color",
  Print = "Print",
  NeckLabel = "NeckLabel",
}

export enum EventName {
  CustomizationSelected = "CustomizationSelected",
  CustomizationUnSelected = "CustomizationUnSelected",
}

export interface CustomizationEvent {
  event: EventName;
  data: {};
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

export enum ClothPrintPlacement {
  Right = "Right",
  Middle = "Middle",
  Left = "Left",
  TopRight = "TopRight",
  TopMiddle = "TopMiddle",
  TopLeft = "TopLeft",
  BottomRight = "BottomRight",
  BottomMiddle = "BottomMiddle",
  BottomLeft = "BottomLeft",
}

export interface ClothPrint {
  file: CustomizationFile;
  PrintSize: number;
  Placement: ClothPrintPlacement;
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
      file: {
        format: "svg",
        url: "https://storage.googleapis.com/son_supply_backend/uploads/83667dd1-09cb-46e5-bcef-52d2764ac330-1705131675065-3491358.svg",
        name: "design.svg",
      },
      PrintSize: 50,
      Placement: ClothPrintPlacement.Middle,
    },
    back: null,
  } as PrintCustomization;
}

export enum NeckLabelSize {
  Small = "small",
  Large = "large",
}

export interface ImagePositionConfig {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function GetNeckLabelImage(size: NeckLabelSize): string {
  switch (size) {
    case NeckLabelSize.Large: {
      return "https://design.sonsupply.com/_nuxt/neck-label-large.7d8dfb3c.png";
    }
    case NeckLabelSize.Small: {
      return "https://design.sonsupply.com/_nuxt/neck-label-small.628b8d54.png";
    }
  }
  return "";
}

export function GetNeckLabelImageConfig(
  size: NeckLabelSize
): ImagePositionConfig {
  switch (size) {
    case NeckLabelSize.Large: {
      return { x: 959, y: 165, width: 87, height: 65 };
    }
    case NeckLabelSize.Small: {
      return { x: 959, y: 165, width: 87, height: 36 };
    }
  }
  return { x: 0, y: 0, width: 0, height: 0 };
}

export function GetNeckPrintImageConfig(
  printSize: NeckPrintSize,
  lableSize: NeckLabelSize
): ImagePositionConfig {
  if (lableSize == NeckLabelSize.Large) {
    switch (printSize) {
      case NeckPrintSize.ExtraSmall: {
        return { x: 987.71, y: 187.11, width: 29.58, height: 20.78 };
      }
      case NeckPrintSize.Small: {
        return { x: 984.0125, y: 184.5125, width: 36.975, height: 25.975 };
      }
      case NeckPrintSize.Medium: {
        return { x: 980.315, y: 181.915, width: 44.37, height: 31.17 };
      }
      case NeckPrintSize.Large: {
        return { x: 971.07125, y: 175.42125, width: 62.8575, height: 44.1575 };
      }
      case NeckPrintSize.ExtraLarge: {
        return { x: 965.525, y: 171.525, width: 73.95, height: 51.95 };
      }
    }
  } else {
    switch (printSize) {
      case NeckPrintSize.ExtraSmall: {
        return { x: 987.71, y: 178.41, width: 29.58, height: 9.18 };
      }
      case NeckPrintSize.Small: {
        return { x: 984.0125, y: 177.2625, width: 36.975, height: 11.475 };
      }
      case NeckPrintSize.Medium: {
        return { x: 980.315, y: 176.115, width: 44.37, height: 13.77 };
      }
      case NeckPrintSize.Large: {
        return { x: 971.07125, y: 173.24625, width: 62.8575, height: 19.5075 };
      }
      case NeckPrintSize.ExtraLarge: {
        return { x: 965.525, y: 171.525, width: 73.95, height: 22.95 };
      }
    }
  }
  return { x: 0, y: 0, width: 0, height: 0 };
}

export function GetPrintLabelImageConfig(
  percent: number,
  placement: ClothPrintPlacement
): ImagePositionConfig {
  // Parent box dimensions
  const parentX = 650;
  const parentY = 512;
  const parentWidth = 705;
  const parentHeight = 940;

  // Calculate inner box dimensions based on percentage
  const innerWidth = parentWidth * (percent / 100);
  const innerHeight = parentHeight * (percent / 100);

  // Calculate x and y coordinates based on placement
  let x, y;
  switch (placement) {
    case ClothPrintPlacement.TopLeft:
      x = parentX;
      y = parentY;
      break;
    case ClothPrintPlacement.TopRight:
      x = parentX + parentWidth - innerWidth;
      y = parentY;
      break;
    case ClothPrintPlacement.TopMiddle:
      x = parentX + (parentWidth - innerWidth) / 2;
      y = parentY;
      break;
    case ClothPrintPlacement.Right:
      x = parentX + parentWidth - innerWidth;
      y = parentY + (parentHeight - innerHeight) / 2;
      break;
    case ClothPrintPlacement.Left:
      x = parentX;
      y = parentY + (parentHeight - innerHeight) / 2;
      break;
    case ClothPrintPlacement.Middle:
      x = parentX + (parentWidth - innerWidth) / 2;
      y = parentY + (parentHeight - innerHeight) / 2;
      break;
    case ClothPrintPlacement.BottomRight:
      x = parentX + parentWidth - innerWidth;
      y = parentY + parentHeight - innerHeight;
      break;
    case ClothPrintPlacement.BottomMiddle:
      x = parentX + (parentWidth - innerWidth) / 2;
      y = parentY + parentHeight - innerHeight;
      break;
    case ClothPrintPlacement.BottomLeft:
      x = parentX;
      y = parentY + parentHeight - innerHeight;
      break;
    default:
      // Default to top left placement
      x = parentX;
      y = parentY;
  }

  return { x, y, width: innerWidth, height: innerHeight };
}

export enum NeckPrintSize {
  ExtraSmall = "ExtraSmall",
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  ExtraLarge = "ExtraLarge",
}

export interface CustomizationFile {
  format: string;
  url: string;
  name: string;
}

interface NeckLabel {
  file: CustomizationFile;
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
      file: {
        format: "png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Original_Adidas_logo.svg/1200px-Original_Adidas_logo.svg.png",
        name: "design.png",
      },
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

export function getFrontFile(data: CustomizationData) {
  let currentFile: CustomizationFile = null;
  switch (data.type) {
    case CustomizationTypes.Print: {
      const a = data as PrintCustomization;
      currentFile = a.front?.file;
      break;
    }
    case CustomizationTypes.NeckLabel: {
      const a = data as NeckLabelCustomization;
      currentFile = a.label?.file;
      break;
    }
  }
  return currentFile;
}

export interface ClothColorPair {
  color: string;
  name: string;
  front: string;
  back: string;
}

export function getClothColors() {
  return [
    {
      color: "#000",
      name: "Black",
      front:
        "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_Black.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_Black_back.png",
    },
    {
      color: "#454545",
      name: "Dark Gray",
      front:
        "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_DarkGreyMelange.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_DarkGreyMelange_back.png",
    },
    {
      color: "#d9d9d9",
      name: "Light Gray",
      front:
        "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_LightGreyMelange.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_LightGreyMelange_back.png",
    },
    {
      color: "#fff",
      name: "White",
      front:
        "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_White.png",
      back: "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_White_back.png",
    },
    {
      color: "#85909c",
      name: "Blue Haze",
      front:
        "https://design.sonsupply.com/img/garments/cotton-t-shirt-short-sleeve/CottonT-Shirt_BlueHaze.png",
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

export function getClothCustomization(type: CustomizationTypes, cloth: Cloth) {
  switch (type) {
    case CustomizationTypes.Color: {
      return cloth.customizations.color;
    }
    case CustomizationTypes.NeckLabel: {
      return cloth.customizations.neckLable;
    }
    case CustomizationTypes.Print: {
      return cloth.customizations.print;
    }
  }
  return null;
}

export function getCustomizationOptions(cloth: Cloth) {
  const allCusts = Array<CustomizationData>();
  const keys = Object.keys(cloth.customizations);

  for (const key of keys) {
    allCusts.push(cloth.customizations[key]);
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
    } as ClothCutomization,
  } as Cloth;
}
