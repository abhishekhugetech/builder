import { Global, css } from "@emotion/react";

export const Styles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      * {
        margin: 0;
      }

      html,
      body {
        height: 100%;
      }

      body {
        font-size: 15px;
        font-family: "Poppins", sans-serif;
        line-height: 1.35;
        -webkit-font-smoothing: antialiased;
      }

      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        overflow-wrap: break-word;
      }

      #root,
      #__next {
        isolation: isolate;
      }

      #root {
        height: 100%;
        width: 100%;
      }

      .transition {
        transition-duration: 0.15s;
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke, opacity, box-shadow, transform,
          filter, -webkit-backdrop-filter;
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke, opacity, box-shadow, transform,
          filter, backdrop-filter;
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke, opacity, box-shadow, transform,
          filter, backdrop-filter, -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .transition-all {
        transition-duration: 0.15s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .transition-colors {
        transition-duration: 0.15s;
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .transition-opacity {
        transition-duration: 0.15s;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .transition-transform {
        transition-duration: 0.15s;
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .delay-200 {
        transition-delay: 0.2s;
      }

      .duration-100 {
        transition-duration: 0.1s;
      }

      .duration-300 {
        transition-duration: 0.3s;
      }

      .duration-500 {
        transition-duration: 0.5s;
      }

      .duration-700 {
        transition-duration: 0.7s;
      }

      .object-center {
        object-position: center;
      }
      .object-contain {
        object-fit: contain;
      }
      .w-full {
        width: 100%;
      }
      .h-full {
        height: 100%;
      }
      .inset-0 {
        inset: 0;
      }
      .\!absolute {
        position: absolute !important;
      }
    `}
  />
);
