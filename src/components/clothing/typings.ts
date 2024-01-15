
export enum CustomizationTypes {
    Color = "color",
    Print = "print",
    NeckLabel = "neckLabel",
  }
  
  
  export interface ColorCustomization {
    type: string;
    title: string;
    description: string;
    selectedColor?: string;
  }
  
  export function getDefaultColorCustomization ()   {
    const colors = [{
    name: "Some color",
    id: "some_color_id",
    color: "green",
    front: "https://google.com",
    back: "https://google.com",
    }]
    return {
      type: CustomizationTypes.Color,
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
  
  export interface PrintCustomization {
    type: string;
    title: string;
    description: string;
    front?: ClothPrint;
    back?: ClothPrint;
  }
  
  export function getDefaultPrintCustomization ()   {
    return {
      type: CustomizationTypes.Print,
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
  
  export interface NeckLabelCustomization {
    type: string;
    title: string;
    description: string;
    label?: ClothLabel
  }
  
  export function getDefaultNeckLabelCustomization ()   {
    return {
      type: CustomizationTypes.NeckLabel,
      title: "Color",
      description: "Change color desc",
      label: {
        labelImageFormat: "png",
        labelImageURL: "",
        labelSize: "",
        labelPrintSize: "",
      },
    }
  }

  export interface ClothCutomization {
    colors: ColorCustomization;
    print: PrintCustomization;
    neckLable: NeckLabelCustomization;
  }

  export type CustomizationData = ColorCustomization | PrintCustomization | NeckLabelCustomization;

  export interface ClothColorPair {
    color: string;
    image: string;
  }

  export interface SizeChart {
    sizeChartURL: string;
  }
  
  export interface Cloth{
    id: string;
    name: string;
    defaultColor: string;
    sizeChart: SizeChart;
    colors: Array<ClothColorPair>
    customizations: ClothCutomization;
  }