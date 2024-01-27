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
import { FC, useEffect, useState } from "react";
import { Card, CardContent, Typography, Container, Box } from "@mui/material";
import { styled, createTheme, useTheme, ThemeProvider } from "@mui/system";

import { shallow } from "zustand/shallow";
import useBus from "use-bus";

export interface FlowZoneProps {
  cloth: Cloth;
}

const FlowZone: FC<FlowZoneProps> = ({ cloth }) => {
  // Perform math and calculate the final positions of elments
  // calcualte and set the images for different customizations
  // Expose optionSelectedCallback({eventType, eventData}) -> use this to show print art border, zoom in neck label

  // Clothing zone customizations
  const [isNeckLableSelected, setIsNeckLableSelected] = useState(false);
  const [printBorderVisible, setPrintBorderVisible] = useState(false);

  // Event Bus setup
  const [cus, setCus] = useState({});
  useBus(
    [EventName.CustomizationSelected, EventName.CustomizationUnSelected],
    (d) => {
      const eventType = d.type;
      const payload = d.payload;
      if (eventType == EventName.CustomizationSelected) {
        switch (payload.type) {
          case CustomizationTypes.NeckLabel: {
            setIsNeckLableSelected(true);
            break;
          }
          case CustomizationTypes.Print: {
            setPrintBorderVisible(true);
            break;
          }
        }
      } else {
        // reset Clothing zone customizations
        setPrintBorderVisible(false);
        setIsNeckLableSelected(false);
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
    >
      <ParentBox>
        <svg
          viewBox="0 0 2000 2222"
          xmlns="http://www.w3.org/2000/svg"
          className={`customizer-design-preview !absolute inset-0 h-full w-full object-contain object-center transition-all delay-200 ${
            isNeckLableSelected ? `duration-700` : `duration-500`
          }`}
          css={css`
            transform: ${isNeckLableSelected
              ? `scale(3) translate(0px, 285.469px)!important`
              : `none`};
          `}
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
          {printBorderVisible ? (
            <rect
              x="650"
              y="512"
              width="705"
              height="940"
              stroke="#F06527"
              fill="none"
            ></rect>
          ) : (
            <div></div>
          )}
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
