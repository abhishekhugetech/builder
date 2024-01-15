import { FC } from "react";
import { css } from "@emotion/react";
import { CustomizationTypes, CustomizationData } from "../../clothing/typings";

export interface NodeTypeProps {
  id: string;
  type: CustomizationTypes;
  data: CustomizationData;
  setSelectedNode?: (props : Array<NodeTypeProps>) => void
}

// NodeTypeRenderer renders the different properties on the sidebar
const NodeTypeRenderer: FC<NodeTypeProps> = (customization) => {
  return (
    <div
      id={customization.id}
    >
      <p
        css={css`
          margin-top: 20px;
        `}
      >
        {customization.id}
      </p>
      <button
      onClick={()=>{
        customization.setSelectedNode([customization])
      }}>
        Change
      </button>
    </div>
  );
};

export default NodeTypeRenderer;
