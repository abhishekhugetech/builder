import "reactflow/dist/style.css";
import { Cloth } from "../clothing/typings";
import { css } from "@emotion/react";
import { FC } from "react";
import { Card, CardContent, Typography, Container, Box } from "@mui/material";
import { styled, createTheme, useTheme, ThemeProvider } from "@mui/system";

import { shallow } from "zustand/shallow";

const FlowZone: FC<Cloth> = ({ color, colors, customizations, id, name }) => {
  console.log(`rendered `, customizations);

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
            href="https://design.sonsupply.com/_nuxt/neck-label-large.7d8dfb3c.png"
            x="959"
            y="165"
            width="87"
            height="65"
          ></image>
          {/* Neck Lable */}
          <image
            href={customizations.neckLable.label?.labelImageURL}
            x="971.07125"
            y="175.42125"
            width="62.8575"
            height="44.1575"
          ></image>
          <rect
            x="650"
            y="512"
            width="705"
            height="940"
            stroke="#F06527"
            fill="none"
          ></rect>
          {/* Print Image */}
          <image
            href={customizations.print.front?.printImageURL}
            x="650"
            y="512"
            width="705"
            height="698.5023041474655"
          ></image>
        </svg>
      </ParentBox>
    </div>
  );
};

export default FlowZone;
