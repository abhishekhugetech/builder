import { css } from "@emotion/react";
import { FC, useState } from "react";
import NodeListRenderer, { NodeTypeProps } from "./nodes";
import CustomizationEditor from "./editor";
import { ChevronLeft } from "lucide-react";
import {
  Cloth,
  CustomizationData,
  EventName,
  getClothCustomization,
  getCustomizationOptions,
} from "../clothing/typings";
import useBus, { dispatch } from "use-bus";

interface SidebarProps {
  cloth: Cloth;
  onCustomizationUpdated?: (customization: CustomizationData) => void;
  onUpdateCloth?: (cloth: Cloth) => void;
}

const Sidebar: FC<SidebarProps> = ({
  cloth,
  onCustomizationUpdated,
  onUpdateCloth,
}) => {
  const [selectedCustomization, setCustomization] = useState(null);
  const onDeselect = () => {
    setCustomization(null);
  };

  // Event Bus setup
  const [cus, setCus] = useState({});
  useBus(
    [EventName.CustomizationRemoveAll],
    (d) => {
      const eventType = d.type;
      const payload = d.payload;
      if (eventType == EventName.CustomizationRemoveAll) {
        onDeselect();
      } else {
        // Do nothing
      }
    },
    [cus]
  );

  const isSingleNodeSelected = selectedCustomization != null;
  // the selected customization was not getting updated and not getting sent as
  // updated value even after the customization data was changed

  // If a single node selected, show the node editor, Editor is a self contained
  // component, it will handle the node type and show the appropriate editor
  if (isSingleNodeSelected) {
    const currentCustomization = getClothCustomization(
      selectedCustomization,
      cloth
    );
    console.log(`current cus`, currentCustomization);

    dispatch({
      type: EventName.CustomizationSelected,
      payload: { type: currentCustomization.type },
    });

    return (
      <div
        css={css`
          border-left: 2px solid lightblue;
        `}
      >
        <div
          css={css`
            padding: 16px 28px;
            border-bottom: 1px solid lightblue;
            font-weight: 500;
            display: flex;
            align-items: center;
          `}
        >
          <ChevronLeft
            css={css`
              cursor: pointer;
              padding: 4px;
              border-radius: 4px;

              &:hover {
                background: lightblue;
              }
            `}
            size={24}
            onClick={onDeselect}
          />
          <p
            css={css`
              margin-left: 8px;
            `}
          >
            {selectedCustomization.type} Customization
          </p>
        </div>
        <CustomizationEditor
          cloth={cloth}
          data={currentCustomization}
          onUpdated={onCustomizationUpdated}
          onUpdateCloth={onUpdateCloth}
        />
      </div>
    );
  }

  dispatch({
    type: EventName.CustomizationUnSelected,
    payload: {},
  });

  // If none selected, then we can show the Nodes panel so user can use them
  return (
    <div
      css={css`
        border-left: 2px solid lightblue;
      `}
    >
      <div
        css={css`
          padding: 16px 28px;
          border-bottom: 1px solid lightblue;
          font-weight: 500;
        `}
      >
        <h2>Customize</h2>
        <br />
        Customize the details and color to make the Hoodie design your own. All
        items automatically come with a size and care label. These are included
        in the price.
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          padding: 24px 28px;
        `}
      >
        {getCustomizationOptions(cloth).map((node) => (
          <NodeListRenderer
            data={node}
            setCustomization={setCustomization}
            key={node.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
