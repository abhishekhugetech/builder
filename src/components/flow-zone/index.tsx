import "reactflow/dist/style.css";
import { Cloth } from "../clothing/typings";
import { css } from "@emotion/react";
import { FC } from "react";
import MobileOptimizedComponent from "./comp";
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

  const ChildBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0%",
    left: "0%",
  }));

  const CenterBox = styled(Box)(({ theme }) => ({
    width: "20%",
    height: "40%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: theme.shape.borderRadius,
  }));

  const SmallBox = styled(Box)(({ theme }) => ({
    width: "4%",
    height: "3%",
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    marginTop: theme.spacing(2), // Add margin as needed
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <ParentBox>
      <Container maxWidth="xl">
        <ChildBox>
          <img
            src={colors.find((c) => c.name == color).front}
            css={css`
              width: "100%";
              height: "100%";
            `}
          />
        </ChildBox>
      </Container>
      <Container maxWidth="sm">
        <CenterBox>
          {
            <img
              id="print"
              src={customizations.print.front?.printImageURL}
              css={css`
              x: "40%",
              y: "40%",
              width: "30%",
              height: "30%"
              `}
            />
          }
        </CenterBox>
      </Container>
      <Container maxWidth="xs">
        <SmallBox>
          <div
            css={css`
              position: "relative";
            `}
          >
            <img
              id="neckLabelTag"
              src="https://design.sonsupply.com/_nuxt/neck-label-large.7d8dfb3c.png"
              css={css`
                width: 100%;
                height: 100%;
              `}
            />
            <img
              id="neckLabel"
              src="https://storage.googleapis.com/son_supply_backend/uploads/83667dd1-09cb-46e5-bcef-52d2764ac330-1705131675065-3491358.svg"
              css={css`
                position: absolute;
                top: 50%;
                left: 50%;
                width: 70%;
                height: 60%;
                transform: translate(-50%, -50%);
              `}
            />
          </div>
        </SmallBox>
      </Container>
    </ParentBox>
  );
};

export default FlowZone;
