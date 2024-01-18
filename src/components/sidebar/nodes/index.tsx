import { FC } from "react";
import { css } from "@emotion/react";
import { CustomizationTypes, CustomizationData } from "../../clothing/typings";

export interface NodeTypeProps {
  id: string;
  data: CustomizationData;
  setCustomization?: (customization : Array<NodeTypeProps>) => void
}

// NodeTypeRenderer renders the different properties on the sidebar
const NodeListRenderer: FC<NodeTypeProps> = (customization) => {
  return (
    <div
      id={customization.id}
    >
      <p
        css={css`
          margin-top: 20px;
        `}
      >
        {customization.data.type}
      </p>
      <button
      onClick={()=>{
        customization.setCustomization([customization])
      }}>
        Change
      </button>
    </div>
  );
};

export default NodeListRenderer;
