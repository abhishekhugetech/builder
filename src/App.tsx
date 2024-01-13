import { css } from "@emotion/react";
import FlowZone from "./components/flow-zone";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ReactFlowProvider } from "reactflow";
import { NodeTypes, getDefaultColorNode, getDefaultNeckLabelNode, getDefaultPrintNode } from "./components/flow-zone/nodes/typings";
import { Styles } from "./components/styles";


function App() {
  const nodes = [
    {
      id: NodeTypes.Color,
      label: "Color",
      type: NodeTypes.Color,
      data: getDefaultColorNode(),
    },
    {
      id: NodeTypes.Print,
      label: "Print",
      type: NodeTypes.Print,
      data: getDefaultPrintNode(),
    },
    {
      id: NodeTypes.NeckLabel,
      label: "Neck Label",
      type: NodeTypes.NeckLabel,
      data: getDefaultNeckLabelNode(),
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
        <DndProvider backend={HTML5Backend}>
          <ReactFlowProvider>
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
          </ReactFlowProvider>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
