import { ChangeEvent, FC, useCallback } from "react";
import { css } from "@emotion/react";
import { shallow } from "zustand/shallow";
import { ColorCustomization } from "../../../clothing/typings";
import { CustomizationEditorProps } from "..";

const ColorNodeDataEditor: FC<CustomizationEditorProps> = (prop) => {

  return (
    <div
      css={css`
        padding: 16px 28px;
        border-bottom: 1px solid lightblue;
        font-weight: 500;
      `}
    >
      <p>{prop.data.description}</p>
      <h1>this is for color</h1>
      <div>
        <label
          htmlFor="text"
          css={css`
            font-weight: 400;
          `}
        >
          Text
        </label>
        <textarea
          name="text"
          css={css`
            margin-top: 16px;
            padding: 8px 12px;
            border-radius: 4px;
            font-weight: 400;
            border: 1px solid lightblue;
            width: 100%;
            height: 100px;
          `}
        />
      </div>
    </div>
  );
};

export default ColorNodeDataEditor;
