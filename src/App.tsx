import { css } from "@emotion/react";
import FlowZone from "./components/flow-zone";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ReactFlowProvider } from "reactflow";
import { CustomizationData, CustomizationTypes, getDefaultColorCustomization, getDefaultNeckLabelCustomization,
   getDefaultPrintCustomization } from "./components/clothing/typings";
import { Styles } from "./components/styles";
import { useState } from "react";


export interface CustomizationView {
  id: string;
  label: string;
  type: CustomizationTypes;
  data: CustomizationData;
}

function App() {
  const nodes = Array<CustomizationView>(
    {
      id: CustomizationTypes.Color,
      label: "Color",
      type: CustomizationTypes.Color,
      data: getDefaultColorCustomization(),
    },
    {
      id: CustomizationTypes.Print,
      label: "Print",
      type: CustomizationTypes.Print,
      data: getDefaultPrintCustomization(),
    },
    {
      id: CustomizationTypes.NeckLabel,
      label: "Neck Label",
      type: CustomizationTypes.NeckLabel,
      data: getDefaultNeckLabelCustomization(),
    })

    console.log(nodes);
    
  const  [nodeState, setNodes] = useState(nodes);


  const onCustomizationUpdated = (customization : CustomizationData) => {
    for (let i = 0; i < nodeState.length; i ++) {
      const node = nodeState[i]
      if (node.type == customization.type ) {
        nodeState[i].data = customization
        setNodes(nodeState)
        break
      }
    }
  }

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
              <Sidebar onCustomizationUpdated={onCustomizationUpdated} nodes={nodeState} />
            </div>
          </ReactFlowProvider>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
