import { FC } from "react";
import { css } from "@emotion/react";
import { CustomizationTypes, CustomizationData } from "../../clothing/typings";

export interface NodeTypeProps {
  data: CustomizationData;
  setCustomization?: (type: CustomizationTypes) => void;
}

// NodeTypeRenderer renders the different properties on the sidebar
const NodeListRenderer: FC<NodeTypeProps> = (customization) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div>
          <h5 className="text-base md:text-lg">{customization.data.type}</h5>
          <p className="text-sm text-neutral-500"></p>
        </div>
      </div>
      <a
        // href="/customize/jEYka5bkH71i9RKVGgYmcX/color"
        onClick={() => {
          customization.setCustomization(customization.data.type);
        }}
        className="rounded border border-stone-300 px-4 py-2 text-[10px] font-bold uppercase text-neutral-500 transition-colors hover:bg-stone-300 hover:text-black"
      >
        Change
      </a>
    </div>
  );
  return (
    <div id={customization.data.type}>
      <p
        css={css`
          margin-top: 20px;
        `}
      >
        {customization.data.type}
      </p>
      <button
        onClick={() => {
          customization.setCustomization(customization.data.type);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default NodeListRenderer;
