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
  const onDeselectCustomization = () => {
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
        onDeselectCustomization();
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
        className="bg-white"
        css={css`
          border-left: 2px solid lightblue;
        `}
      >
        <CustomizationEditor
          cloth={cloth}
          data={currentCustomization}
          onUpdated={onCustomizationUpdated}
          onUpdateCloth={onUpdateCloth}
          onDeselectCustomization={onDeselectCustomization}
        />
      </div>
    );
  }

  dispatch({
    type: EventName.CustomizationUnSelected,
    payload: {},
  });

  return (
    <div className="__REMOVE_ME_panel_7tbke_2 customizer-side-panel flex w-full flex-col border-t border-neutral-200 bg-white md:w-96 md:flex-initial md:overflow-hidden md:border-l md:border-t-0 md:border-neutral-300 !h-auto transition-all duration-300 -translate-x-0 md:translate-x-0 md:opacity-100">
      {/* Top Customization Title */}
      <div className="border-b border-neutral-300 px-6 py-5 md:p-8 hidden md:block">
        <div className="flex items-center md:mb-4">
          <h2 className="text-xl font-bold md:text-2xl">Customize</h2>
        </div>
        <p className="hidden text-sm text-neutral-500 md:block md:text-base">
          Customize the details and color to make the T-Shirt design your own.
          All items automatically come with a size and care label. These are
          included in the price.
        </p>
      </div>
      {/* Middle Area for selecting Customizations */}
      <div className="flex-1 overflow-auto">
        <div className="hidden flex-col space-y-4 border-b border-neutral-300 p-8 md:flex">
          <label
            htmlFor="design-name"
            className="text-xs uppercase text-zinc-800"
          >
            Name of your design
          </label>
          <input
            id="design-name"
            name="design-name"
            placeholder="Name your design"
            className="h-10 rounded bg-neutral-100 px-4 text-xs placeholder:text-neutral-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col space-y-4 p-6 md:space-y-8 md:p-8">
          {getCustomizationOptions(cloth).map((node) => (
            <NodeListRenderer
              data={node}
              setCustomization={setCustomization}
              key={node.type}
            />
          ))}
        </div>
      </div>
      {/* Quantity Box */}

      {/* Continue Button */}
      <div className="relative flex h-20 items-center justify-between bg-neutral-100 px-6 md:justify-end">
        <button className="inline text-sm underline md:hidden _caret_1b6oa_2">
          <span>Price breakdown</span>
        </button>
        <a
          // href="/customize/jEYka5bkH71i9RKVGgYmcX/sizing"
          className="rounded bg-black px-4 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-stone-700"
        >
          Continue
        </a>
      </div>
    </div>
  );

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
