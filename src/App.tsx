import { css } from "@emotion/react";
import FlowZone from "./components/flow-zone";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ReactFlowProvider } from "reactflow";
import {
  Cloth,
  CustomizationData,
  CustomizationTypes,
  getDefaultCloth,
} from "./components/clothing/typings";
import { Styles } from "./components/styles";
import { useState } from "react";

function App() {
  const [cloth, updateCloth] = useState(getDefaultCloth());

  const onCustomizationUpdated = (customization: CustomizationData) => {
    console.log("customizatio update", customization);

    switch (customization.type) {
      case CustomizationTypes.Color: {
        cloth.customizations.color = customization;
        break;
      }
      case CustomizationTypes.NeckLabel: {
        cloth.customizations.neckLable = customization;
        break;
      }
      case CustomizationTypes.Print: {
        cloth.customizations.print = customization;
        break;
      }
    }
    updateCloth({ ...cloth });
    console.log(`cloth updated`);
  };

  const onUpdateCloth = (c: Cloth) => {
    updateCloth({ ...c });
  };

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
              <FlowZone {...cloth} />
              <Sidebar
                onUpdateCloth={onUpdateCloth}
                onCustomizationUpdated={onCustomizationUpdated}
                cloth={cloth}
              />
            </div>
          </ReactFlowProvider>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
