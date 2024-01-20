import { ChangeEvent, FC, useCallback } from "react";
import { css } from "@emotion/react";
import {
  ClothColorPair,
  ClothPrint,
  ClothPrintPlacement,
  PrintCustomization,
} from "../../../clothing/typings";
import { CustomizationEditorProps } from "..";
import FileUploadBox from "../../../fileupload/fileupload";
import { UploadError, UploadResponse } from "../../../fileupload/typings";

const PrintNodeDataEditor: FC<CustomizationEditorProps> = (prop) => {
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
          Add the print of your choice. Please note that the print has to be
          placed in the printable area.
        </p>
      </div>
      <div>
        <FileUploadBox
          onUploadError={(err: UploadError) => {
            alert(err.message);
          }}
          onUploadSuccess={(res: UploadResponse) => {
            const print = prop.data as PrintCustomization;
            // print.F
            const newData = {
              ...print,
              front: {
                printImageURL: res.url,
                Placement: ClothPrintPlacement.Middle,
                printImageFormat: res.extension,
                widthCM: "30cm",
              } as ClothPrint,
            };
            prop.onUpdated(newData);
          }}
        />
      </div>
    </div>
  );
};

export default PrintNodeDataEditor;
