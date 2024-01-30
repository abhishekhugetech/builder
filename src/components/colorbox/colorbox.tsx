import { Button } from "@mui/material";
import { css } from "@mui/material";

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/system";

import { shallow } from "zustand/shallow";

function getContrastColor(backgroundColor: string): string {
  // Convert the hex color to RGB
  const hexToRgb = (hex: string): number[] => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const parse = (str: string): number => parseInt(str, 16);
    return result
      ? [parse(result[1]), parse(result[2]), parse(result[3])]
      : shorthandRegex.test(hex)
      ? [parse(hex[1] + hex[1]), parse(hex[2] + hex[2]), parse(hex[3] + hex[3])]
      : [0, 0, 0];
  };

  // Calculate the relative luminance
  const calculateRelativeLuminance = (rgb: number[]): number => {
    const gammaCorrect = (value: number): number => {
      const correctedValue = value / 255;
      return correctedValue <= 0.03928
        ? correctedValue / 12.92
        : Math.pow((correctedValue + 0.055) / 1.055, 2.4);
    };

    const luminance =
      0.2126 * gammaCorrect(rgb[0]) +
      0.7152 * gammaCorrect(rgb[1]) +
      0.0722 * gammaCorrect(rgb[2]);

    return luminance;
  };

  // Check if the background color is dark or light
  const rgb = hexToRgb(backgroundColor);
  const luminance = calculateRelativeLuminance(rgb);
  const textColor = luminance > 0.5 ? "#000000" : "#FFFFFF";

  return textColor;
}

const CustomCard = ({ title, checked, color }) => {
  const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: color, // Set your desired background color
    color: getContrastColor(color), // Set text color based on background color
    borderRadius: "8px",
    cursor: "pointer",
    position: "relative",
    margin: "20px 32px",
    transition: "transform 0.5s", // Add a transition for the transform property
    "&:hover": {
      transform: "scale(1.05)", // Scale up on hover
    },
  }));

  const Circle = styled(Box)(({ theme }) => ({
    width: 22,
    height: 22,
    borderRadius: "50%",
    border: `2px solid ${getContrastColor(color)}`,
    color: getContrastColor(color),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: theme.spacing(2),
  }));

  return (
    <button
      className="_colorButton_ber8l_2"
      css={css`
        background-color: ${color};
        color: ${getContrastColor(color)};
      `}
    >
      <span className="text-xs">{title}</span>
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-current">
        {checked ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 4.5C12.293 4.5 12.1055 4.584 11.9698 4.71975L6.75 9.93925L4.03025 7.21975C3.8945 7.084 3.707 7 3.5 7C3.08575 7 2.75 7.33575 2.75 7.75C2.75 7.957 2.834 8.1445 2.96975 8.28025L6.21975 11.5302C6.3555 11.666 6.543 11.75 6.75 11.75C6.957 11.75 7.1445 11.666 7.28025 11.5302L13.0302 5.78025C13.166 5.64475 13.25 5.457 13.25 5.25C13.25 4.83575 12.9143 4.5 12.5 4.5Z"
              className="fill-current"
            ></path>
          </svg>
        ) : (
          <div></div>
        )}
      </div>
    </button>
  );

  return (
    <StyledCard>
      <CardContent>
        <Typography align={"center"} component="div" fontSize={14}>
          {title}
        </Typography>
      </CardContent>
      <Circle>{checked && <Typography variant="body2">✓</Typography>}</Circle>
    </StyledCard>
  );
};

export default CustomCard;
