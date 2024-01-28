import "reactflow/dist/style.css";
import {
  Cloth,
  CustomizationTypes,
  EventName,
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
  const printBorderRef = useRef(null);

  const neckLableUpdated = (isSelected) => {
    const svg = svgRef.current;

    if (isSelected && svg) {
      const translateY = 0.35 * svg.clientWidth;

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

  const printBorderUpdated = (toShow) => {
    const rect = printBorderRef.current;
    if (toShow) {
      rect.style.display = `block`;
    } else {
      rect.style.display = `none`;
    }
  };

  const updateCurrentPreview = () => {
    switch (customization.current) {
      case CustomizationTypes.NeckLabel: {
        const translateY = 0.35 * svgRef.current.clientWidth;
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
    updateCurrentPreview();
  }, 0);

  const removeAllCustomizations = () => {
    dispatch({
      type: EventName.CustomizationRemoveAll,
      payload: {},
    });
  };

  // Event Bus setup
  const [cus, setCus] = useState({});
  useBus(
    [EventName.CustomizationSelected, EventName.CustomizationUnSelected],
    (d) => {
      const eventType = d.type;
      const payload = d.payload;
      if (eventType == EventName.CustomizationSelected) {
        customization.current = payload.type;
        switch (payload.type) {
          case CustomizationTypes.NeckLabel: {
            neckLableUpdated(true);
            break;
          }
          case CustomizationTypes.Print: {
            printBorderUpdated(true);
            break;
          }
        }
      } else {
        // reset Clothing zone customizations
        printBorderUpdated(false);
        neckLableUpdated(false);
        customization.current = null;
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

  const clothPrintImageConfig = GetPrintLabelImageConfig(
    cloth.customizations.print?.front?.PrintSize,
    cloth.customizations.print?.front?.Placement
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
