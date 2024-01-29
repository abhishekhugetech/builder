import { Global, css } from "@emotion/react";

export const Styles = () => (
  <Global
    styles={css`
      ._menuItem_mm5em_2 {
        align-items: center;
        display: flex;
        font-size: 1rem;
        font-weight: 700;
        height: 100%;
        line-height: 1.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }

      @media (min-width: 768px) {
        ._menuItem_mm5em_2 {
          text-transform: uppercase;
        }
      }

      /*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/
      *,
      :after,
      :before {
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
      }
      :after,
      :before {
        --tw-content: "";
      }
      html {
        -webkit-text-size-adjust: 100%;
        font-feature-settings: normal;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
          Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        font-variation-settings: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
      }
      body {
        line-height: inherit;
        margin: 0;
      }
      hr {
        border-top-width: 1px;
        color: inherit;
        height: 0;
      }
      abbr:where([title]) {
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      b,
      strong {
        font-weight: bolder;
      }
      code,
      kbd,
      pre,
      samp {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          Liberation Mono, Courier New, monospace;
        font-size: 1em;
      }
      small {
        font-size: 80%;
      }
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      sub {
        bottom: -0.25em;
      }
      sup {
        top: -0.5em;
      }
      table {
        border-collapse: collapse;
        border-color: inherit;
        text-indent: 0;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font-feature-settings: inherit;
        color: inherit;
        font-family: inherit;
        font-size: 100%;
        font-variation-settings: inherit;
        font-weight: inherit;
        line-height: inherit;
        margin: 0;
        padding: 0;
      }
      button,
      select {
        text-transform: none;
      }
      [type="button"],
      [type="reset"],
      [type="submit"],
      button {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
      }
      :-moz-focusring {
        outline: auto;
      }
      :-moz-ui-invalid {
        box-shadow: none;
      }
      progress {
        vertical-align: baseline;
      }
      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        height: auto;
      }
      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      ::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      summary {
        display: list-item;
      }
      blockquote,
      dd,
      dl,
      figure,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      p,
      pre {
        margin: 0;
      }
      fieldset {
        margin: 0;
      }
      fieldset,
      legend {
        padding: 0;
      }
      menu,
      ol,
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      dialog {
        padding: 0;
      }
      textarea {
        resize: vertical;
      }
      input::-moz-placeholder,
      textarea::-moz-placeholder {
        color: #9ca3af;
        opacity: 1;
      }
      input::placeholder,
      textarea::placeholder {
        color: #9ca3af;
        opacity: 1;
      }
      [role="button"],
      button {
        cursor: pointer;
      }
      :disabled {
        cursor: default;
      }
      audio,
      canvas,
      embed,
      iframe,
      img,
      object,
      svg,
      video {
        display: block;
        vertical-align: middle;
      }
      img,
      video {
        height: auto;
        max-width: 100%;
      }
      [hidden] {
        display: none;
      }
      *,
      :after,
      :before {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
      }
      ::backdrop {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
      }
      .container {
        width: 100%;
      }
      @media (min-width: 640px) {
        .container {
          max-width: 640px;
        }
      }
      @media (min-width: 768px) {
        .container {
          max-width: 768px;
        }
      }
      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
        }
      }
      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }
      @media (min-width: 1536px) {
        .container {
          max-width: 1536px;
        }
      }
      .fixed {
        position: fixed;
      }
      .\!absolute {
        position: absolute !important;
      }
      .absolute {
        position: absolute;
      }
      .relative {
        position: relative;
      }
      .sticky {
        position: sticky;
      }
      .inset-0 {
        inset: 0;
      }
      .inset-x-0 {
        left: 0;
        right: 0;
      }
      .inset-y-0 {
        bottom: 0;
        top: 0;
      }
      .bottom-0 {
        bottom: 0;
      }
      .bottom-20 {
        bottom: 5rem;
      }
      .left-0 {
        left: 0;
      }
      .left-5 {
        left: 1.25rem;
      }
      .left-6 {
        left: 1.5rem;
      }
      .right-0 {
        right: 0;
      }
      .right-full {
        right: 100%;
      }
      .top-0 {
        top: 0;
      }
      .top-10 {
        top: 2.5rem;
      }
      .top-16 {
        top: 4rem;
      }
      .z-10 {
        z-index: 10;
      }
      .z-50 {
        z-index: 50;
      }
      .z-\[400\] {
        z-index: 400;
      }
      .col-start-1 {
        grid-column-start: 1;
      }
      .col-start-3 {
        grid-column-start: 3;
      }
      .col-start-4 {
        grid-column-start: 4;
      }
      .col-start-5 {
        grid-column-start: 5;
      }
      .col-end-3 {
        grid-column-end: 3;
      }
      .col-end-4 {
        grid-column-end: 4;
      }
      .col-end-5 {
        grid-column-end: 5;
      }
      .col-end-7 {
        grid-column-end: 7;
      }
      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }
      .my-2 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
      .-mb-px {
        margin-bottom: -1px;
      }
      .mb-2 {
        margin-bottom: 0.5rem;
      }
      .mb-4 {
        margin-bottom: 1rem;
      }
      .mb-6 {
        margin-bottom: 1.5rem;
      }
      .mb-8 {
        margin-bottom: 2rem;
      }
      .ml-1 {
        margin-left: 0.25rem;
      }
      .ml-1\.5 {
        margin-left: 0.375rem;
      }
      .ml-2 {
        margin-left: 0.5rem;
      }
      .ml-4 {
        margin-left: 1rem;
      }
      .ml-6 {
        margin-left: 1.5rem;
      }
      .ml-auto {
        margin-left: auto;
      }
      .mr-2 {
        margin-right: 0.5rem;
      }
      .mt-10 {
        margin-top: 2.5rem;
      }
      .mt-2 {
        margin-top: 0.5rem;
      }
      .mt-4 {
        margin-top: 1rem;
      }
      .mt-6 {
        margin-top: 1.5rem;
      }
      .mt-8 {
        margin-top: 2rem;
      }
      .mt-auto {
        margin-top: auto;
      }
      .block {
        display: block;
      }
      .inline-block {
        display: inline-block;
      }
      .inline {
        display: inline;
      }
      .flex {
        display: flex;
      }
      .table {
        display: table;
      }
      .grid {
        display: grid;
      }
      .hidden {
        display: none;
      }
      .\!h-auto {
        height: auto !important;
      }
      .h-0 {
        height: 0;
      }
      .h-0\.5 {
        height: 0.125rem;
      }
      .h-10 {
        height: 2.5rem;
      }
      .h-12 {
        height: 3rem;
      }
      .h-14 {
        height: 3.5rem;
      }
      .h-20 {
        height: 5rem;
      }
      .h-28 {
        height: 7rem;
      }
      .h-3 {
        height: 0.75rem;
      }
      .h-44 {
        height: 11rem;
      }
      .h-48 {
        height: 12rem;
      }
      .h-6 {
        height: 1.5rem;
      }
      .h-8 {
        height: 2rem;
      }
      .h-96 {
        height: 24rem;
      }
      .h-full {
        height: 100%;
      }
      .max-h-full {
        max-height: 100%;
      }
      .min-h-\[56px\] {
        min-height: 56px;
      }
      .min-h-screen {
        min-height: 100vh;
      }
      .w-1\/2 {
        width: 50%;
      }
      .w-10 {
        width: 2.5rem;
      }
      .w-3 {
        width: 0.75rem;
      }
      .w-4 {
        width: 1rem;
      }
      .w-6 {
        width: 1.5rem;
      }
      .w-8 {
        width: 2rem;
      }
      .w-9 {
        width: 2.25rem;
      }
      .w-full {
        width: 100%;
      }
      .min-w-\[180px\] {
        min-width: 180px;
      }
      .min-w-\[200px\] {
        min-width: 200px;
      }
      .min-w-\[80px\] {
        min-width: 80px;
      }
      .max-w-4xl {
        max-width: 56rem;
      }
      .max-w-6xl {
        max-width: 72rem;
      }
      .max-w-lg {
        max-width: 32rem;
      }
      .max-w-sm {
        max-width: 24rem;
      }
      .flex-1 {
        flex: 1 1 0%;
      }
      .-translate-x-0 {
        --tw-translate-x: -0px;
        transform: translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
          skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .-translate-x-5 {
        --tw-translate-x: -1.25rem;
        transform: translate(-1.25rem, var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .-translate-y-1\/2 {
        --tw-translate-y: -50%;
        transform: translate(var(--tw-translate-x), -50%)
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .translate-x-0 {
        --tw-translate-x: 0px;
        transform: translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
          skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .translate-x-full {
        --tw-translate-x: 100%;
        transform: translate(100%, var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .translate-y-0 {
        --tw-translate-y: 0px;
        transform: translate(var(--tw-translate-x)) rotate(var(--tw-rotate))
          skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .translate-y-1\/2 {
        --tw-translate-y: 50%;
        transform: translate(var(--tw-translate-x), 50%)
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .translate-y-2 {
        --tw-translate-y: 0.5rem;
        transform: translate(var(--tw-translate-x), 0.5rem)
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .translate-y-full {
        --tw-translate-y: 100%;
        transform: translate(var(--tw-translate-x), 100%)
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .transform,
      .translate-y-full {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .cursor-wait {
        cursor: wait;
      }
      .list-outside {
        list-style-position: outside;
      }
      .list-disc {
        list-style-type: disc;
      }
      .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr));
      }
      .flex-col {
        flex-direction: column;
      }
      .items-center {
        align-items: center;
      }
      .justify-end {
        justify-content: flex-end;
      }
      .justify-center {
        justify-content: center;
      }
      .justify-between {
        justify-content: space-between;
      }
      .gap-4 {
        gap: 1rem;
      }
      .space-x-1 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-left: 0.25rem;
        margin-left: calc(0.25rem * (1 - var(--tw-space-x-reverse)));
        margin-right: 0;
        margin-right: calc(0.25rem * var(--tw-space-x-reverse));
      }
      .space-x-4 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-left: 1rem;
        margin-left: calc(1rem * (1 - var(--tw-space-x-reverse)));
        margin-right: 0;
        margin-right: calc(1rem * var(--tw-space-x-reverse));
      }
      .space-x-6 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-left: 1.5rem;
        margin-left: calc(1.5rem * (1 - var(--tw-space-x-reverse)));
        margin-right: 0;
        margin-right: calc(1.5rem * var(--tw-space-x-reverse));
      }
      .space-y-2 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-bottom: 0;
        margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
        margin-top: 0.5rem;
        margin-top: calc(0.5rem * (1 - var(--tw-space-y-reverse)));
      }
      .space-y-3 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-bottom: 0;
        margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
        margin-top: 0.75rem;
        margin-top: calc(0.75rem * (1 - var(--tw-space-y-reverse)));
      }
      .space-y-4 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-bottom: 0;
        margin-bottom: calc(1rem * var(--tw-space-y-reverse));
        margin-top: 1rem;
        margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));
      }
      .divide-x > :not([hidden]) ~ :not([hidden]) {
        --tw-divide-x-reverse: 0;
        border-left-width: 1px;
        border-left-width: calc(1px * (1 - var(--tw-divide-x-reverse)));
        border-right-width: 0;
        border-right-width: calc(1px * var(--tw-divide-x-reverse));
      }
      .divide-stone-300 > :not([hidden]) ~ :not([hidden]) {
        --tw-divide-opacity: 1;
        border-color: #d6d3d1;
        border-color: rgb(214 211 209 / var(--tw-divide-opacity));
      }
      .overflow-auto {
        overflow: auto;
      }
      .overflow-hidden {
        overflow: hidden;
      }
      .overflow-x-auto {
        overflow-x: auto;
      }
      .text-ellipsis {
        text-overflow: ellipsis;
      }
      .rounded {
        border-radius: 0.25rem;
      }
      .rounded-full {
        border-radius: 9999px;
      }
      .rounded-lg {
        border-radius: 0.5rem;
      }
      .rounded-t {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
      }
      .border {
        border-width: 1px;
      }
      .border-x {
        border-left-width: 1px;
        border-right-width: 1px;
      }
      .border-b {
        border-bottom-width: 1px;
      }
      .border-l {
        border-left-width: 1px;
      }
      .border-t {
        border-top-width: 1px;
      }
      .border-dashed {
        border-style: dashed;
      }
      .border-black {
        --tw-border-opacity: 1;
        border-color: #000;
        border-color: rgb(0 0 0 / var(--tw-border-opacity));
      }
      .border-current {
        border-color: currentColor;
      }
      .border-neutral-200 {
        --tw-border-opacity: 1;
        border-color: #e5e5e5;
        border-color: rgb(229 229 229 / var(--tw-border-opacity));
      }
      .border-neutral-300 {
        --tw-border-opacity: 1;
        border-color: #d4d4d4;
        border-color: rgb(212 212 212 / var(--tw-border-opacity));
      }
      .border-neutral-400 {
        --tw-border-opacity: 1;
        border-color: #a3a3a3;
        border-color: rgb(163 163 163 / var(--tw-border-opacity));
      }
      .border-neutral-800 {
        --tw-border-opacity: 1;
        border-color: #262626;
        border-color: rgb(38 38 38 / var(--tw-border-opacity));
      }
      .border-red-500 {
        --tw-border-opacity: 1;
        border-color: #ef4444;
        border-color: rgb(239 68 68 / var(--tw-border-opacity));
      }
      .border-stone-300 {
        --tw-border-opacity: 1;
        border-color: #d6d3d1;
        border-color: rgb(214 211 209 / var(--tw-border-opacity));
      }
      .border-stone-500 {
        --tw-border-opacity: 1;
        border-color: #78716c;
        border-color: rgb(120 113 108 / var(--tw-border-opacity));
      }
      .bg-black {
        --tw-bg-opacity: 1;
        background-color: #000;
        background-color: rgb(0 0 0 / var(--tw-bg-opacity));
      }
      .bg-neutral-100 {
        --tw-bg-opacity: 1;
        background-color: #f5f5f5;
        background-color: rgb(245 245 245 / var(--tw-bg-opacity));
      }
      .bg-neutral-200 {
        --tw-bg-opacity: 1;
        background-color: #e5e5e5;
        background-color: rgb(229 229 229 / var(--tw-bg-opacity));
      }
      .bg-neutral-300 {
        --tw-bg-opacity: 1;
        background-color: #d4d4d4;
        background-color: rgb(212 212 212 / var(--tw-bg-opacity));
      }
      .bg-neutral-900 {
        --tw-bg-opacity: 1;
        background-color: #171717;
        background-color: rgb(23 23 23 / var(--tw-bg-opacity));
      }
      .bg-stone-50 {
        --tw-bg-opacity: 1;
        background-color: #fafaf9;
        background-color: rgb(250 250 249 / var(--tw-bg-opacity));
      }
      .bg-stone-700 {
        --tw-bg-opacity: 1;
        background-color: #44403c;
        background-color: rgb(68 64 60 / var(--tw-bg-opacity));
      }
      .bg-white {
        --tw-bg-opacity: 1;
        background-color: #fff;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
      }
      .bg-white\/75 {
        background-color: #ffffffbf;
      }
      .bg-zinc-100 {
        --tw-bg-opacity: 1;
        background-color: #f4f4f5;
        background-color: rgb(244 244 245 / var(--tw-bg-opacity));
      }
      .bg-contain {
        background-size: contain;
      }
      .bg-center {
        background-position: 50%;
      }
      .bg-no-repeat {
        background-repeat: no-repeat;
      }
      .fill-current {
        fill: currentColor;
      }
      .object-contain {
        -o-object-fit: contain;
        object-fit: contain;
      }
      .object-center {
        -o-object-position: center;
        object-position: center;
      }
      .p-0 {
        padding: 0;
      }
      .p-4 {
        padding: 1rem;
      }
      .p-6 {
        padding: 1.5rem;
      }
      .p-8 {
        padding: 2rem;
      }
      .px-1 {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
      }
      .px-14 {
        padding-left: 3.5rem;
        padding-right: 3.5rem;
      }
      .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
      .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      .px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
      }
      .py-14 {
        padding-bottom: 3.5rem;
        padding-top: 3.5rem;
      }
      .py-2 {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      }
      .py-3 {
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
      }
      .py-5 {
        padding-bottom: 1.25rem;
        padding-top: 1.25rem;
      }
      .py-8 {
        padding-bottom: 2rem;
        padding-top: 2rem;
      }
      .pb-3 {
        padding-bottom: 0.75rem;
      }
      .pb-4 {
        padding-bottom: 1rem;
      }
      .pb-6 {
        padding-bottom: 1.5rem;
      }
      .pl-6 {
        padding-left: 1.5rem;
      }
      .pr-2 {
        padding-right: 0.5rem;
      }
      .pt-2 {
        padding-top: 0.5rem;
      }
      .pt-4 {
        padding-top: 1rem;
      }
      .pt-6 {
        padding-top: 1.5rem;
      }
      .text-center {
        text-align: center;
      }
      .text-right {
        text-align: right;
      }
      .text-start {
        text-align: start;
      }
      .text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }
      .text-\[10px\] {
        font-size: 10px;
      }
      .text-\[32px\] {
        font-size: 32px;
      }
      .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      .text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      .text-xs {
        font-size: 0.75rem;
        line-height: 1rem;
      }
      .font-bold {
        font-weight: 700;
      }
      .uppercase {
        text-transform: uppercase;
      }
      .leading-none {
        line-height: 1;
      }
      .leading-tight {
        line-height: 1.25;
      }
      .tracking-wider {
        letter-spacing: 0.05em;
      }
      .text-black {
        --tw-text-opacity: 1;
        color: #000;
        color: rgb(0 0 0 / var(--tw-text-opacity));
      }
      .text-gray-900 {
        --tw-text-opacity: 1;
        color: #111827;
        color: rgb(17 24 39 / var(--tw-text-opacity));
      }
      .text-neutral-500 {
        --tw-text-opacity: 1;
        color: #737373;
        color: rgb(115 115 115 / var(--tw-text-opacity));
      }
      .text-red-500 {
        --tw-text-opacity: 1;
        color: #ef4444;
        color: rgb(239 68 68 / var(--tw-text-opacity));
      }
      .text-red-600 {
        --tw-text-opacity: 1;
        color: #dc2626;
        color: rgb(220 38 38 / var(--tw-text-opacity));
      }
      .text-son-orange {
        --tw-text-opacity: 1;
        color: #f06527;
        color: rgb(240 101 39 / var(--tw-text-opacity));
      }
      .text-white {
        --tw-text-opacity: 1;
        color: #fff;
        color: rgb(255 255 255 / var(--tw-text-opacity));
      }
      .text-zinc-800 {
        --tw-text-opacity: 1;
        color: #27272a;
        color: rgb(39 39 42 / var(--tw-text-opacity));
      }
      .underline {
        text-decoration-line: underline;
      }
      .opacity-0 {
        opacity: 0;
      }
      .opacity-100 {
        opacity: 1;
      }
      .opacity-40 {
        opacity: 0.4;
      }
      .opacity-50 {
        opacity: 0.5;
      }
      .outline-none {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      .blur {
        --tw-blur: blur(8px);
        filter: blur(8px) var(--tw-brightness) var(--tw-contrast)
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
      .blur,
      .filter {
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
      .backdrop-filter {
        -webkit-backdrop-filter: var(--tw-backdrop-blur)
          var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
          var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
          var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
          var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
          var(--tw-backdrop-sepia);
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
      .ease-in {
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      }
      .ease-out {
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
      body {
        font-family: Inter, sans-serif;
      }
      html {
        overflow-y: scroll;
      }
      .placeholder\:text-neutral-500::-moz-placeholder {
        --tw-text-opacity: 1;
        color: #737373;
        color: rgb(115 115 115 / var(--tw-text-opacity));
      }
      .placeholder\:text-neutral-500::placeholder {
        --tw-text-opacity: 1;
        color: #737373;
        color: rgb(115 115 115 / var(--tw-text-opacity));
      }
      .backdrop\:bg-black\/50::backdrop {
        background-color: #00000080;
      }
      .hover\:bg-black:hover {
        --tw-bg-opacity: 1;
        background-color: #000;
        background-color: rgb(0 0 0 / var(--tw-bg-opacity));
      }
      .hover\:bg-neutral-100:hover {
        --tw-bg-opacity: 1;
        background-color: #f5f5f5;
        background-color: rgb(245 245 245 / var(--tw-bg-opacity));
      }
      .hover\:bg-neutral-200:hover {
        --tw-bg-opacity: 1;
        background-color: #e5e5e5;
        background-color: rgb(229 229 229 / var(--tw-bg-opacity));
      }
      .hover\:bg-stone-300:hover {
        --tw-bg-opacity: 1;
        background-color: #d6d3d1;
        background-color: rgb(214 211 209 / var(--tw-bg-opacity));
      }
      .hover\:bg-stone-700:hover {
        --tw-bg-opacity: 1;
        background-color: #44403c;
        background-color: rgb(68 64 60 / var(--tw-bg-opacity));
      }
      .hover\:bg-zinc-200:hover {
        --tw-bg-opacity: 1;
        background-color: #e4e4e7;
        background-color: rgb(228 228 231 / var(--tw-bg-opacity));
      }
      .hover\:bg-opacity-80:hover {
        --tw-bg-opacity: 0.8;
      }
      .hover\:text-black:hover {
        --tw-text-opacity: 1;
        color: #000;
        color: rgb(0 0 0 / var(--tw-text-opacity));
      }
      .hover\:text-white:hover {
        --tw-text-opacity: 1;
        color: #fff;
        color: rgb(255 255 255 / var(--tw-text-opacity));
      }
      .hover\:underline:hover {
        text-decoration-line: underline;
      }
      .focus\:outline-none:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
      .disabled\:bg-white:disabled {
        --tw-bg-opacity: 1;
        background-color: #fff;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
      }
      @media (min-width: 640px) {
        .sm\:\!flex {
          display: flex !important;
        }
        .sm\:-translate-x-2 {
          --tw-translate-x: -0.5rem;
          transform: translate(-0.5rem, var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .sm\:translate-x-0 {
          --tw-translate-x: 0px;
          transform: translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
            skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
            scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .sm\:translate-y-0 {
          --tw-translate-y: 0px;
          transform: translate(var(--tw-translate-x)) rotate(var(--tw-rotate))
            skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
            scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .sm\:text-5xl {
          font-size: 3rem;
          line-height: 1;
        }
      }
      @media (min-width: 768px) {
        .md\:static {
          position: static;
        }
        .md\:sticky {
          position: sticky;
        }
        .md\:mb-4 {
          margin-bottom: 1rem;
        }
        .md\:mb-8 {
          margin-bottom: 2rem;
        }
        .md\:mt-6 {
          margin-top: 1.5rem;
        }
        .md\:block {
          display: block;
        }
        .md\:inline {
          display: inline;
        }
        .md\:flex {
          display: flex;
        }
        .md\:hidden {
          display: none;
        }
        .md\:\!h-full {
          height: 100% !important;
        }
        .md\:h-12 {
          height: 3rem;
        }
        .md\:h-20 {
          height: 5rem;
        }
        .md\:h-32 {
          height: 8rem;
        }
        .md\:h-full {
          height: 100%;
        }
        .md\:min-h-\[600px\] {
          min-height: 600px;
        }
        .md\:w-96 {
          width: 24rem;
        }
        .md\:min-w-\[200px\] {
          min-width: 200px;
        }
        .md\:flex-1 {
          flex: 1 1 0%;
        }
        .md\:flex-initial {
          flex: 0 1 auto;
        }
        .md\:translate-x-0 {
          --tw-translate-x: 0px;
          transform: translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
            skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
            scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .md\:translate-x-5 {
          --tw-translate-x: 1.25rem;
          transform: translate(1.25rem, var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .md\:translate-x-full {
          --tw-translate-x: 100%;
          transform: translate(100%, var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .md\:translate-y-0 {
          --tw-translate-y: 0px;
          transform: translate(var(--tw-translate-x)) rotate(var(--tw-rotate))
            skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
            scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .md\:flex-row {
          flex-direction: row;
        }
        .md\:justify-start {
          justify-content: flex-start;
        }
        .md\:justify-end {
          justify-content: flex-end;
        }
        .md\:gap-6 {
          gap: 1.5rem;
        }
        .md\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
          --tw-space-y-reverse: 0;
          margin-bottom: 0;
          margin-bottom: calc(1rem * var(--tw-space-y-reverse));
          margin-top: 1rem;
          margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));
        }
        .md\:space-y-6 > :not([hidden]) ~ :not([hidden]) {
          --tw-space-y-reverse: 0;
          margin-bottom: 0;
          margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
          margin-top: 1.5rem;
          margin-top: calc(1.5rem * (1 - var(--tw-space-y-reverse)));
        }
        .md\:space-y-8 > :not([hidden]) ~ :not([hidden]) {
          --tw-space-y-reverse: 0;
          margin-bottom: 0;
          margin-bottom: calc(2rem * var(--tw-space-y-reverse));
          margin-top: 2rem;
          margin-top: calc(2rem * (1 - var(--tw-space-y-reverse)));
        }
        .md\:overflow-hidden {
          overflow: hidden;
        }
        .md\:border-l {
          border-left-width: 1px;
        }
        .md\:border-t-0 {
          border-top-width: 0;
        }
        .md\:border-neutral-300 {
          --tw-border-opacity: 1;
          border-color: #d4d4d4;
          border-color: rgb(212 212 212 / var(--tw-border-opacity));
        }
        .md\:p-6 {
          padding: 1.5rem;
        }
        .md\:p-8 {
          padding: 2rem;
        }
        .md\:px-0 {
          padding-left: 0;
          padding-right: 0;
        }
        .md\:px-32 {
          padding-left: 8rem;
          padding-right: 8rem;
        }
        .md\:px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .md\:py-14 {
          padding-bottom: 3.5rem;
          padding-top: 3.5rem;
        }
        .md\:py-6 {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;
        }
        .md\:pb-32 {
          padding-bottom: 8rem;
        }
        .md\:pb-6 {
          padding-bottom: 1.5rem;
        }
        .md\:pt-20 {
          padding-top: 5rem;
        }
        .md\:text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .md\:text-\[32px\] {
          font-size: 32px;
        }
        .md\:text-base {
          font-size: 1rem;
          line-height: 1.5rem;
        }
        .md\:text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .md\:text-sm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        .md\:uppercase {
          text-transform: uppercase;
        }
        .md\:opacity-0 {
          opacity: 0;
        }
        .md\:opacity-100 {
          opacity: 1;
        }
      }
      @media (min-width: 1024px) {
        .lg\:text-base {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
      @media (min-width: 1280px) {
        .xl\:max-w-\[1600px\] {
          max-width: 1600px;
        }
        .xl\:grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        src: url(./Inter-400-1.1c3007b8.woff2) format("woff2");
        unicode-range: u+0460-052f, u+1c80-1c88, u+20b4, u+2de0-2dff,
          u+a640-a69f, u+fe2e-fe2f;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        src: url(./Inter-400-2.eba94878.woff2) format("woff2");
        unicode-range: u+0301, u+0400-045f, u+0490-0491, u+04b0-04b1, u+2116;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        src: url(./Inter-400-3.81f77e51.woff2) format("woff2");
        unicode-range: u+1f??;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        src: url(./Inter-400-4.d92c6cbc.woff2) format("woff2");
        unicode-range: u+0370-03ff;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        src: url(./Inter-400-5.15df7612.woff2) format("woff2");
        unicode-range: u+0102-0103, u+0110-0111, u+0128-0129, u+0168-0169,
          u+01a0-01a1, u+01af-01b0, u+0300-0301, u+0303-0304, u+0308-0309,
          u+0323, u+0329, u+1ea0-1ef9, u+20ab;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        src: url(./Inter-400-6.a2bfd9fe.woff2) format("woff2");
        unicode-range: u+0100-02af, u+0304, u+0308, u+0329, u+1e00-1e9f,
          u+1ef2-1eff, u+2020, u+20a0-20ab, u+20ad-20cf, u+2113, u+2c60-2c7f,
          u+a720-a7ff;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        src: url(./Inter-400-7.88df0b5a.woff2) format("woff2");
        unicode-range: u+00??, u+0131, u+0152-0153, u+02bb-02bc, u+02c6, u+02da,
          u+02dc, u+0304, u+0308, u+0329, u+2000-206f, u+2074, u+20ac, u+2122,
          u+2191, u+2193, u+2212, u+2215, u+feff, u+fffd;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        src: url(./Inter-400-1.1c3007b8.woff2) format("woff2");
        unicode-range: u+0460-052f, u+1c80-1c88, u+20b4, u+2de0-2dff,
          u+a640-a69f, u+fe2e-fe2f;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        src: url(./Inter-400-2.eba94878.woff2) format("woff2");
        unicode-range: u+0301, u+0400-045f, u+0490-0491, u+04b0-04b1, u+2116;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        src: url(./Inter-400-3.81f77e51.woff2) format("woff2");
        unicode-range: u+1f??;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        src: url(./Inter-400-4.d92c6cbc.woff2) format("woff2");
        unicode-range: u+0370-03ff;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        src: url(./Inter-400-5.15df7612.woff2) format("woff2");
        unicode-range: u+0102-0103, u+0110-0111, u+0128-0129, u+0168-0169,
          u+01a0-01a1, u+01af-01b0, u+0300-0301, u+0303-0304, u+0308-0309,
          u+0323, u+0329, u+1ea0-1ef9, u+20ab;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        src: url(./Inter-400-6.a2bfd9fe.woff2) format("woff2");
        unicode-range: u+0100-02af, u+0304, u+0308, u+0329, u+1e00-1e9f,
          u+1ef2-1eff, u+2020, u+20a0-20ab, u+20ad-20cf, u+2113, u+2c60-2c7f,
          u+a720-a7ff;
      }
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        src: url(./Inter-400-7.88df0b5a.woff2) format("woff2");
        unicode-range: u+00??, u+0131, u+0152-0153, u+02bb-02bc, u+02c6, u+02da,
          u+02dc, u+0304, u+0308, u+0329, u+2000-206f, u+2074, u+20ac, u+2122,
          u+2191, u+2193, u+2212, u+2215, u+feff, u+fffd;
      }
      ._button_483js_2 {
        --tw-text-opacity: 1;
        color: #737373;
        color: rgb(115 115 115 / var(--tw-text-opacity));
        transition-duration: 0.15s;
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        width: 2rem;
      }
      ._button_483js_2:hover {
        --tw-bg-opacity: 1;
        background-color: #f5f5f4;
        background-color: rgb(245 245 244 / var(--tw-bg-opacity));
      }
      ._input_483js_6::-webkit-inner-spin-button,
      ._input_483js_6::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      ._input_483js_6[type="number"] {
        -moz-appearance: textfield;
      }
      ._label_1uc8m_2 {
        --tw-text-opacity: 1;
        color: #737373;
        color: rgb(115 115 115 / var(--tw-text-opacity));
        font-size: 10px;
      }
      ._panel_7tbke_2 {
        bottom: 0;
        height: calc(100% - 12rem);
        top: auto;
      }
      @media (min-width: 768px) {
        ._panel_7tbke_2 {
          height: 100%;
        }
      }
      ._root_t43dq_2 {
        box-shadow: 0 -2px 8px #00000021;
      }
      ._caret_1b6oa_2:after {
        background-image: url(./anchor-up.cde14a40.svg);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        content: "";
        display: inline-block;
        height: 0.75rem;
        margin-bottom: -1px;
        margin-left: 0.375rem;
        transition-duration: 0.15s;
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        width: 0.75rem;
      }
      ._caret_1b6oa_2._opened_1b6oa_10:after {
        --tw-rotate: 180deg;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(180deg) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      ._colorButton_ber8l_2 {
        align-items: center;
        display: flex;
        height: 100%;
        height: 3.5rem;
        justify-content: space-between;
        -o-object-fit: contain;
        object-fit: contain;
        -o-object-position: center;
        object-position: center;
        padding: 1rem;
        position: absolute;
        position: relative;
        text-align: start;
        transition-duration: 0.3s;
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      ._colorButton_ber8l_2,
      ._colorButton_ber8l_2:after {
        border-radius: 0.5rem;
        inset: 0;
        width: 100%;
      }
      ._colorButton_ber8l_2:after {
        box-shadow: 2px 2px 4px #0003;
        content: "";
        height: 100%;
        opacity: 0;
        position: absolute;
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;
      }
      ._colorButton_ber8l_2:hover {
        transform: scale(1.01);
      }
      ._colorButton_ber8l_2:hover:after {
        opacity: 1;
      }
      ._colorButton_ber8l_2:active {
        transform: scale(0.99);
      }
      ._colorButton_ber8l_2:active:after {
        opacity: 0.8;
      }
      ._base_129cb_2 {
        background-color: var(--indeterminate-progress-bar-bg);
        height: 0.125rem;
        overflow: hidden;
        position: relative;
      }
      ._base_129cb_2:after {
        animation: _button-indeterminate-progress-bar-fill_129cb_1 1s linear;
        animation-iteration-count: infinite;
        background-color: var(--indeterminate-progress-bar-accent);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        transform-origin: left;
        width: 75%;
      }
      ._light_129cb_18 {
        --indeterminate-progress-bar-bg: #7b7b7b;
        --indeterminate-progress-bar-accent: #fff;
      }
      ._dark_129cb_23 {
        --indeterminate-progress-bar-bg: #cdcdcd;
        --indeterminate-progress-bar-accent: #010202;
      }
      @keyframes _button-indeterminate-progress-bar-fill_129cb_1 {
        0% {
          transform: scaleX(0) translate(0);
        }
        1% {
          transform: scaleX(0) translate(0);
        }
        33% {
          transform: scaleX(0.66) translate(16.5%);
        }
        75% {
          transform: scaleX(1.5) translate(66%);
        }
        to {
          transform: scaleX(2) translate(150%);
        }
      }
      ._dropdown_9p33w_2 {
        box-shadow: 0 0 4px #00000040;
      }
      ._activeItem_9p33w_6 {
        --tw-text-opacity: 1;
        color: #000;
        color: rgb(0 0 0 / var(--tw-text-opacity));
      }
      ._slider_92zxz_2 .vue-slider-dot {
        --tw-bg-opacity: 1;
        background-color: #a3a3a3;
        background-color: rgb(163 163 163 / var(--tw-bg-opacity));
        border-radius: 9999px;
      }
      ._slider_92zxz_2 .vue-slider-rail {
        --tw-bg-opacity: 1;
        background-color: #d4d4d4;
        background-color: rgb(212 212 212 / var(--tw-bg-opacity));
      }
      ._table_c84v9_2 {
        text-align: center;
        text-transform: uppercase;
      }
      ._table_c84v9_2 tr:nth-child(2n) {
        --tw-bg-opacity: 1;
        background-color: #f5f5f5;
        background-color: rgb(245 245 245 / var(--tw-bg-opacity));
      }
      ._table_c84v9_2 td,
      ._table_c84v9_2 th {
        min-width: 80px;
        padding: 0.5rem;
      }
      ._table_c84v9_2 td:first-child {
        --tw-border-opacity: 1;
        border-bottom-width: 1px;
        border-color: #a3a3a3;
        border-color: rgb(163 163 163 / var(--tw-border-opacity));
        min-width: 180px;
      }
      @media (min-width: 768px) {
        ._table_c84v9_2 td:first-child {
          min-width: 200px;
        }
      }
      ._table_c84v9_2 td:not(:first-child),
      ._table_c84v9_2 th:not(:first-child) {
        --tw-border-opacity: 1;
        border-color: #a3a3a3;
        border-color: rgb(163 163 163 / var(--tw-border-opacity));
        border-left-width: 1px;
      }
      ._table_c84v9_2 tr:first-child {
        --tw-border-opacity: 1;
        border-bottom-width: 1px;
        border-color: #a3a3a3;
        border-color: rgb(163 163 163 / var(--tw-border-opacity));
      }
      ._dropdown_c84v9_28 ul {
        min-width: 200px;
      }
      ._dialog_194ps_2 {
        --animation-settings: 0.25s cubic-bezier(0.25, 0, 0.3, 1) normal;
      }
      ._dialog_194ps_2[open] {
        animation: _dialogSlideIn_194ps_1 var(--animation-settings);
      }
      ._dialog_194ps_2.is-hidden {
        animation: _dialogSlideOut_194ps_1 var(--animation-settings);
      }
      ._dialog_194ps_2::backdrop {
        animation: none;
        -webkit-backdrop-filter: blur(0.5rem);
        backdrop-filter: blur(0.5rem);
        background-color: #00000080;
      }
      ._dialog_194ps_2[open]::backdrop {
        animation: _dialogFadeIn_194ps_1 var(--animation-settings);
      }
      ._dialog_194ps_2.is-hidden::backdrop {
        animation: _dialogFadeOut_194ps_1 var(--animation-settings);
      }
      @keyframes _dialogSlideIn_194ps_1 {
        0% {
          opacity: 0;
          transform: translateY(10%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes _dialogFadeIn_194ps_1 {
        0% {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes _dialogFadeOut_194ps_1 {
        to {
          opacity: 0;
        }
      }
      @keyframes _dialogSlideOut_194ps_1 {
        to {
          opacity: 0;
          transform: translateY(10%);
        }
      }
      ._textBackground_hrv9x_2 {
        background-image: url(./bg.96ef156b.svg);
        background-repeat: repeat;
        background-size: 100%;
      }
      @media (min-width: 768px) {
        ._textBackground_hrv9x_2 {
          background-size: auto;
        }
      }
      ._description_1e59o_2 p + p {
        margin-top: 1rem;
      }
      ._description_1e59o_2 ul {
        list-style-position: outside;
        list-style-type: disc;
        padding-left: 1rem;
      }
      @media (max-width: 768px) {
        ._description_1e59o_2._hiddenOnMobile_1e59o_12 > :not(:first-child) {
          display: none;
        }
      }
      .default-page-enter-active,
      .default-page-leave-active {
        transition-duration: 0.2s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .default-page-enter-from,
      .default-page-leave-to {
        opacity: 0;
      }
      .from-to-customizer-page-enter-active,
      .from-to-customizer-page-leave-active {
        transition-duration: 0.5s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .from-to-customizer-page-enter-from,
      .from-to-customizer-page-leave-to {
        opacity: 0;
      }
      .customizer-enter-active,
      .customizer-leave-active {
        transition-duration: 0.3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .customizer-enter-active .customizer-side-panel,
      .customizer-leave-active .customizer-side-panel {
        transition-duration: 0.5s;
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .customizer-enter-active .customizer-design-preview,
      .customizer-leave-active .customizer-design-preview {
        transition-duration: 0.5s;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .customizer-enter-from,
      .customizer-leave-to {
        opacity: 0;
      }
      .customizer-enter-from .customizer-side-panel,
      .customizer-leave-to .customizer-side-panel {
        --tw-translate-y: 50%;
        transform: translate(var(--tw-translate-x), 50%)
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      @media (min-width: 768px) {
        .customizer-enter-from .customizer-side-panel,
        .customizer-leave-to .customizer-side-panel {
          --tw-translate-x: 100%;
          --tw-translate-y: 0px;
          transform: translate(100%) rotate(var(--tw-rotate))
            skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
            scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skew(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
      }
      .customizer-enter-from .customizer-design-preview,
      .customizer-leave-to .customizer-design-preview {
        opacity: 0;
      }
    `}
  />
);
