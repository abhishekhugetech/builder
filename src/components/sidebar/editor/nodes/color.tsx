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
    <div className="_panel_7tbke_2 customizer-side-panel flex w-full flex-col border-t border-neutral-200 bg-white md:w-96 md:flex-initial md:overflow-hidden md:border-l md:border-t-0 md:border-neutral-300 absolute inset-y-0 right-0">
      <div className="border-b border-neutral-300 px-6 py-5 md:p-8">
        <div className="flex items-center md:mb-4">
          <a
            onClick={prop.onDeselectCustomization}
            className="router-link-active flex items-center mr-2"
          >
            <div className="flex h-6 w-9 items-center justify-center rounded bg-neutral-100">
              <svg
                width="13"
                height="9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.646 4.146a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4.5l2.829-2.828a.5.5 0 10-.708-.708L.646 4.146zM1 5h12V4H1v1z"
                  fill="#000"
                ></path>
              </svg>
            </div>
          </a>
          <h2 className="text-xl font-bold md:text-2xl">Color</h2>
        </div>
        <p className="hidden text-sm text-neutral-500 md:block md:text-base">
          Choose from our selection of in-stock colors for the fastest delivery.
        </p>
        <div className="mt-4 hidden rounded bg-neutral-100 p-4 md:block">
          <p className="text-sm text-neutral-500">
            Looking for a specific color?
          </p>
          <a
            className="mt-2 text-sm font-bold underline"
            href="/contact"
            target="_blank"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-2 overflow-auto p-6 md:space-y-4 md:p-8">
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
      </div>
      <div className="hidden border-t border-neutral-300 px-6 py-8 md:block">
        <div className="flex items-center">
          <a
            onClick={prop.onDeselectCustomization}
            className="router-link-active flex items-center"
          >
            <div className="flex h-6 w-9 items-center justify-center rounded bg-neutral-100">
              <svg
                width="13"
                height="9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.646 4.146a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4.5l2.829-2.828a.5.5 0 10-.708-.708L.646 4.146zM1 5h12V4H1v1z"
                  fill="#000"
                ></path>
              </svg>
            </div>
            <span className="ml-2 text-lg font-bold">Back</span>
          </a>
        </div>
      </div>
    </div>
  );

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
          max-height: 30vh;
          overflow: scroll;
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
