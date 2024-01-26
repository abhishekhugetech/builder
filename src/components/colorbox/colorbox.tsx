import { Button } from "@mui/material";

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
    borderRadius: "15px",
    cursor: "pointer",
    padding: theme.spacing(2),
    position: "relative",
    margin: "20px 32px",
    transition: "transform 0.5s", // Add a transition for the transform property
    "&:hover": {
      transform: "scale(1.05)", // Scale up on hover
    },
  }));

  const Circle = styled(Box)(({ theme }) => ({
    width: 30,
    height: 30,
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
    <StyledCard>
      <CardContent>
        <Typography align={"center"} variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <Circle>{checked && <Typography variant="body2">✓</Typography>}</Circle>
    </StyledCard>
  );
};

export default CustomCard;
