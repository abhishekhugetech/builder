import { ChangeEvent, FC, useCallback } from "react";
import { css } from "@emotion/react";
import { shallow } from "zustand/shallow";
import { NeckLabelCustomization } from "../../../clothing/typings";

const NeckLabelNodeDataEditor: FC<NeckLabelCustomization> = ({ type, description, title, label }) => {
  return (
    <div
      css={css`
        padding: 16px 28px;
        border-bottom: 1px solid lightblue;
        font-weight: 500;
      `}
    >
      <div css={css``}>
        <label
          htmlFor="text"
          css={css`
            font-weight: 400;
          `}
        >
          URL
        </label>
        <input
          name="url"
          css={css`
            padding: 8px 12px;
            border-radius: 4px;
            border: 1px solid lightblue;
            font-weight: 400;
            margin-top: 8px;
            width: 100%;
          `}
        />
      </div>
      <div
        css={css`
          margin-top: 16px;
        `}
      >
        <label
          htmlFor="text"
          css={css`
            font-weight: 400;
          `}
        >
          Caption
        </label>
        <textarea
          name="caption"
          css={css`
            margin-top: 8px;
            padding: 8px 12px;
            border: 1px solid lightblue;
            border-radius: 4px;
            font-weight: 400;
            width: 100%;
            height: 100px;
          `}
        />
      </div>
    </div>
  );
};

export default NeckLabelNodeDataEditor;
