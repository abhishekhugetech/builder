import "reactflow/dist/style.css";
import {
  Cloth,
  GetNeckLabelImage,
  GetNeckLabelImageConfig,
  GetNeckPrintImageConfig,
  GetPrintLabelImageConfig,
} from "../clothing/typings";
import { css } from "@emotion/react";
import { FC } from "react";
import { Card, CardContent, Typography, Container, Box } from "@mui/material";
import { styled, createTheme, useTheme, ThemeProvider } from "@mui/system";

import { shallow } from "zustand/shallow";

const FlowZone: FC<Cloth> = ({ color, colors, customizations, id, name }) => {
  // Perform math and calculate the final positions of elments
  // calcualte and set the images for different customizations
  // Expose optionSelectedCallback({eventType, eventData}) -> use this to show print art border, zoom in neck label

  const neckLableImage = GetNeckLabelImage(
    customizations.neckLable?.label?.labelSize
  );
  const neckLableSizeImageConfig = GetNeckLabelImageConfig(
    customizations.neckLable?.label?.labelSize
  );
  const neckPrintSizeImageConfig = GetNeckPrintImageConfig(
    customizations.neckLable?.label?.labelPrintSize,
    customizations.neckLable?.label?.labelSize
  );

  const clothPrintImageConfig = GetPrintLabelImageConfig(
    customizations.print?.front?.PrintSize,
    customizations.print?.front?.Placement
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
    <div>
      <ParentBox>
        <svg
          viewBox="0 0 2000 2222"
          xmlns="http://www.w3.org/2000/svg"
          className="customizer-design-preview !absolute inset-0 h-full w-full object-contain object-center transition-all delay-200 duration-500"
          css={css`
            transform: none;
          `}
        >
          <image
            href={colors.find((c) => c.name == color).front}
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
            href={customizations.neckLable.label?.file.url}
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
          ></rect>
          {/* Print Image */}
          {customizations.print?.front == null ? (
            <div></div>
          ) : (
            <image
              href={customizations.print.front?.file.url}
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
