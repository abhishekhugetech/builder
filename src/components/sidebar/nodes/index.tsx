import { FC } from "react";
import { css } from "@emotion/react";
import { CustomizationTypes, CustomizationData } from "../../clothing/typings";

export interface NodeTypeProps {
  id: string;
  type: CustomizationTypes;
  data: CustomizationData;
}

// NodeTypeRenderer renders the different properties on the sidebar
const NodeTypeRenderer: FC<NodeTypeProps> = ({ id, type, data  }) => {
  return (
    <div
      id={id}
    >
      <p
        css={css`
          margin-top: 20px;
        `}
      >
        {id}
      </p>
      <button>
        Change
      </button>
    </div>
  );
};

export default NodeTypeRenderer;
