import { css, Global } from "@emotion/react";
import FlowZone from "./components/flow-zone";
import Sidebar, { NodeTypes } from "./components/sidebar";
import Header from "./components/header";

const Styles = () => (
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
    `}
  />
);

function App() {
  const nodes = [
    {
      id: "textMessage",
      label: "Text Message",
      type: NodeTypes.Text,
    },
    {
      id: "imageMessage",
      label: "Image Message",
      type: NodeTypes.Image,
    },
  ];

  return (
    <>
      <Styles />
      <div
        css={css`
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        `}
      >
        <Header />
        <div
          css={css`
            display: grid;
            grid-template-columns: 3fr 1fr;
            grid-auto-rows: 1fr;
            flex: 1;
          `}
        >
          <FlowZone />
          <Sidebar nodes={nodes} />
        </div>
      </div>
    </>
  );
}

export default App;
