import FlowZone from "./components/flow-zone";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import {
  Cloth,
  CustomizationData,
  CustomizationTypes,
  getDefaultCloth,
} from "./components/clothing/typings";
import { Styles } from "./components/styles";
import { useState } from "react";
import Footer from "./components/footer";

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
      case CustomizationTypes.Logo: {
        cloth.customizations.logo = customization;
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

      <div className="flex flex min-h-screen flex-col">
        <Header></Header>
        <div className="relative flex flex-1 flex-col">
          <div className="flex flex-1 flex-col">
            <div className="fixed inset-x-0 bottom-0 top-10 z-10">
              <div className="absolute inset-0 flex flex-col overflow-hidden bg-stone-50 md:flex-row _textBackground_hrv9x_2">
                <FlowZone cloth={cloth} />
                <Sidebar
                  onUpdateCloth={onUpdateCloth}
                  onCustomizationUpdated={onCustomizationUpdated}
                  cloth={cloth}
                />
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/* <div
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
              <FlowZone cloth={cloth} />
              <Sidebar
                onUpdateCloth={onUpdateCloth}
                onCustomizationUpdated={onCustomizationUpdated}
                cloth={cloth}
              />
            </div>
          </ReactFlowProvider>
        </DndProvider>
      </div> */}
    </>
  );
}

export default App;
