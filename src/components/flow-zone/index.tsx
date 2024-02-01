import "reactflow/dist/style.css";
import {
  Cloth,
  CustomizationTypes,
  EventName,
  GetLogoImageConfig,
  GetNeckLabelImage,
  GetNeckLabelImageConfig,
  GetNeckPrintImageConfig,
  GetPrintLabelImageConfig,
} from "../clothing/typings";
import { css } from "@emotion/react";
import { FC, useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography, Container, Box } from "@mui/material";
import { styled, createTheme, useTheme, ThemeProvider } from "@mui/system";

import { shallow } from "zustand/shallow";
import useBus, { dispatch } from "use-bus";

export interface FlowZoneProps {
  cloth: Cloth;
}

const FlowZone: FC<FlowZoneProps> = ({ cloth }) => {
  // Perform math and calculate the final positions of elments
  // calcualte and set the images for different customizations
  // Expose optionSelectedCallback({eventType, eventData}) -> use this to show print art border, zoom in neck label

  console.log(`*** FLOW ZONE *** rendered`);
  const customization = useRef(null);

  // Clothing zone customizations
  const svgRef = useRef(null);
  const zoneSVGContainer = useRef(null);
  const printBorderRef = useRef(null);
  const logoBorderRef = useRef(null);
  const [isFronSelected, setFrontSelected] = useState(true);

  const neckLableUpdated = (isSelected) => {
    const svg = svgRef.current;

    if (isSelected && svg) {
      const translateY = 0.35 * svg.clientHeight;

      // Apply scale and translation transformation
      svg.classList.remove("duration-500");
      svg.classList.add("duration-700");
      svg.style.transform = `scale(3) translate(0px, ${translateY}px)`;
    } else {
      svg.classList.remove("duration-700");
      svg.classList.add("duration-500");
      svg.style.transform = `none`;
    }
  };

  // printBorderUpdated makes the print border hidden/visible
  const printBorderUpdated = (toShow) => {
    const rect = printBorderRef.current;
    if (toShow) {
      rect.style.display = `block`;
    } else {
      rect.style.display = `none`;
    }
  };

  // logoBorderUpdated makes the logo border hidden/visible
  const logoBorderUpdated = (toShow) => {
    const rect = logoBorderRef.current;
    if (toShow) {
      rect.style.display = `block`;
    } else {
      rect.style.display = `none`;
    }
  };

  // onCreateView sets up the current view in ClothingZone based on the last
  // customization selected, used to restore the UI as it was before the re-render
  const onCreateView = () => {
    switch (customization.current) {
      case CustomizationTypes.NeckLabel: {
        const translateY = 0.35 * svgRef.current.clientHeight;
        svgRef.current.style.transform = `scale(3) translate(0px, ${translateY}px)`;
        setTimeout(() => {
          const animClasList = ["transition-all", "delay-200", "duration-500"];
          animClasList.forEach((c) => svgRef.current.classList.add(c));
        }, 100);
        break;
      }
      case CustomizationTypes.Print: {
        printBorderRef.current.style.display = `block`;
      }
    }
  };
  setTimeout(() => {
    onCreateView();
  }, 0);

  const removeAllCustomizations = () => {
    dispatch({
      type: EventName.CustomizationRemoveAll,
      payload: {},
    });
  };

  const onCustomizationSelected = (type) => {
    // Set current customization
    customization.current = type;
    // Custom handling for customizations
    switch (type) {
      case CustomizationTypes.NeckLabel: {
        neckLableUpdated(true);
        break;
      }
      case CustomizationTypes.Print: {
        printBorderUpdated(true);
        break;
      }
      case CustomizationTypes.Logo: {
        logoBorderUpdated(true);
        break;
      }
    }
    // Generic handling of customizations
    // Set zoom level for Clothing Zone
    const classToAdd = ["h-48", "duration-300", "md:h-full"];
    const classToRemove = ["h-full", "delay-200", "duration-500"];
    classToAdd.map((d) => zoneSVGContainer.current.classList.add(d));
    classToRemove.map((d) => zoneSVGContainer.current.classList.remove(d));
  };

  const onCustomizationRemoved = () => {
    setFrontSelected(true);
    printBorderUpdated(false);
    logoBorderUpdated(false);
    neckLableUpdated(false);
    customization.current = null;
    // Reset zoom for clothing zone
    const classToAdd = ["h-full", "delay-200", "duration-500"];
    const classToRemove = ["h-48", "duration-300", "md:h-full"];
    classToAdd.map((d) => zoneSVGContainer.current.classList.add(d));
    classToRemove.map((d) => zoneSVGContainer.current.classList.remove(d));
  };

  // Event Bus setup, Registering all the events that can be received here
  const [cus, setCus] = useState({});
  useBus(
    [
      EventName.CustomizationSelected,
      EventName.CustomizationUnSelected,
      EventName.CustomizationPrintFrontSelected,
      EventName.CustomizationPrintBackSelected,
    ],
    (d) => {
      const eventType = d.type;
      const payload = d.payload;
      if (eventType == EventName.CustomizationSelected) {
        onCustomizationSelected(payload.type);
      } else if (eventType == EventName.CustomizationPrintFrontSelected) {
        setFrontSelected(true);
      } else if (eventType == EventName.CustomizationPrintBackSelected) {
        setFrontSelected(false);
      } else {
        // reset Clothing zone customizations
        onCustomizationRemoved();
      }
    },
    [cus]
  );

  const neckLableImage = GetNeckLabelImage(
    cloth.customizations.neckLable?.label?.labelSize
  );
  const neckLableSizeImageConfig = GetNeckLabelImageConfig(
    cloth.customizations.neckLable?.label?.labelSize
  );
  const neckPrintSizeImageConfig = GetNeckPrintImageConfig(
    cloth.customizations.neckLable?.label?.labelPrintSize,
    cloth.customizations.neckLable?.label?.labelSize
  );
  const logoImageConfig = GetLogoImageConfig(
    cloth.customizations.logo?.PrintSize,
    cloth.customizations.logo?.Placement
  );

  const currentColor = cloth.colors.find((c) => c.name == cloth.color);

  let clothPrintImageConfig = null;
  let printFile = null;
  if (isFronSelected) {
    printFile = cloth.customizations.print?.front;
    clothPrintImageConfig = GetPrintLabelImageConfig(
      cloth.customizations.print?.front?.PrintSize,
      cloth.customizations.print?.front?.Placement
    );
  } else {
    printFile = cloth.customizations.print?.back;
    clothPrintImageConfig = GetPrintLabelImageConfig(
      cloth.customizations.print?.back?.PrintSize,
      cloth.customizations.print?.back?.Placement
    );
  }

  return (
    <div
      className="relative flex-1 overflow-hidden"
      onClick={removeAllCustomizations}
    >
      {/* Code for zooming into cloth with any customization selected */}
      <div
        className={`absolute inset-0 transition-all h-full delay-200 duration-500`}
        ref={zoneSVGContainer}
      >
        <svg
          viewBox="0 0 2000 2222"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={`customizer-design-preview !absolute inset-0 h-full w-full object-contain object-center`}
        >
          <image
            href={isFronSelected ? currentColor.front : currentColor.back}
            x="0"
            y="0"
            width="100%"
            height="100%"
          ></image>
          {/* Default neck label (TODO: Make it dynamic based on size) */}
          {isFronSelected ? (
            <image
              href={neckLableImage}
              x={neckLableSizeImageConfig.x}
              y={neckLableSizeImageConfig.y}
              width={neckLableSizeImageConfig.width}
              height={neckLableSizeImageConfig.height}
            ></image>
          ) : (
            <image></image>
          )}
          {/* Neck Lable */}
          {isFronSelected ? (
            <image
              href={cloth.customizations.neckLable.label?.file.url}
              x={neckPrintSizeImageConfig.x}
              y={neckPrintSizeImageConfig.y}
              width={neckPrintSizeImageConfig.width}
              height={neckPrintSizeImageConfig.height}
            ></image>
          ) : (
            <image></image>
          )}
          {/* Logo */}
          {isFronSelected && cloth.customizations.logo?.file?.url != null ? (
            <image
              href={cloth.customizations.logo?.file.url}
              x={logoImageConfig.x}
              y={logoImageConfig.y}
              width={logoImageConfig.width}
              height={logoImageConfig.height}
            ></image>
          ) : (
            <image></image>
          )}

          {/* Area around the Design make it dynamic */}
          <rect
            x="650"
            y="512"
            width="705"
            height="940"
            stroke="#F06527"
            fill="none"
            display={`none`}
            ref={printBorderRef}
          ></rect>
          {/* Logo Border */}
          <rect
            x="650"
            y="512"
            width="705"
            height="200"
            stroke="#F06527"
            fill="none"
            display={`none`}
            ref={logoBorderRef}
          ></rect>
          {/* Print Image */}
          {printFile == null ? (
            <div></div>
          ) : (
            <image
              href={printFile?.file.url}
              x={clothPrintImageConfig.x}
              y={clothPrintImageConfig.y}
              width={clothPrintImageConfig.width}
              height={clothPrintImageConfig.height}
            ></image>
          )}
        </svg>
      </div>
    </div>
  );

  const ParentBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100vh", // Adjust as needed
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <div
      css={css`
        overflow: hidden;
      `}
      onClick={removeAllCustomizations}
    >
      <ParentBox>
        <svg
          viewBox="0 0 2000 2222"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          className={`customizer-design-preview !absolute inset-0 h-full w-full object-contain object-center`}
        >
          <image
            href={cloth.colors.find((c) => c.name == cloth.color).front}
            x="0"
            y="0"
            width="100%"
            height="100%"
          ></image>
          {/* Default neck label (TODO: Make it dynamic based on size) */}
          <image
            href={neckLableImage}
            x={neckLableSizeImageConfig.x}
            y={neckLableSizeImageConfig.y}
            width={neckLableSizeImageConfig.width}
            height={neckLableSizeImageConfig.height}
          ></image>
          {/* Neck Lable */}
          <image
            href={cloth.customizations.neckLable.label?.file.url}
            x={neckPrintSizeImageConfig.x}
            y={neckPrintSizeImageConfig.y}
            width={neckPrintSizeImageConfig.width}
            height={neckPrintSizeImageConfig.height}
          ></image>
          {/* Area around the Design make it dynamic */}
          <rect
            x="650"
            y="512"
            width="705"
            height="940"
            stroke="#F06527"
            fill="none"
            display={`none`}
            ref={printBorderRef}
          ></rect>
          {/* Print Image */}
          {cloth.customizations.print?.front == null ? (
            <div></div>
          ) : (
            <image
              href={cloth.customizations.print.front?.file.url}
              x={clothPrintImageConfig.x}
              y={clothPrintImageConfig.y}
              width={clothPrintImageConfig.width}
              height={clothPrintImageConfig.height}
            ></image>
          )}
        </svg>
      </ParentBox>
    </div>
  );
};

export default FlowZone;
