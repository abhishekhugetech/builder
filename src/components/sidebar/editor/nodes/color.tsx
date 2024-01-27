import { ChangeEvent, FC, useCallback } from "react";
import { css } from "@emotion/react";
import { CustomizationEditorProps } from "..";
import CustomCard from "../../../colorbox/colorbox";
import { ClothColorPair } from "../../../clothing/typings";

const ColorNodeDataEditor: FC<CustomizationEditorProps> = (prop) => {
  const onColorSelected = (color: ClothColorPair) => {
    prop.cloth.color = color.name;
    prop.onUpdateCloth(prop.cloth);
  };
  return (
    <div>
      <div
        css={css`
          padding: 16px 28px;
          border-bottom: 1px solid lightblue;
          font-weight: 500;
        `}
      >
        <p>
          Choose from our selection of in-stock colors for the fastest delivery.
        </p>
      </div>

      <div
        css={css`
          margin-top: 30px;
        `}
      >
        {prop.cloth.colors.map((color) => (
          <div
            onClick={() => {
              // console.log(color);
              onColorSelected(color);
            }}
            key={color.name}
          >
            <CustomCard
              color={color.color}
              title={color.name}
              checked={prop.cloth.color == color.name}
            />
          </div>
        ))}

        <br />
      </div>
    </div>
  );
};

export default ColorNodeDataEditor;
