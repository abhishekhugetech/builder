import { ChangeEvent, FC, useCallback } from "react";
import { css } from "@emotion/react";
import {
  ClothColorPair,
  ClothPrint,
  ClothPrintPlacement,
  CustomizationData,
  CustomizationTypes,
  PrintCustomization,
} from "../../../clothing/typings";
import { CustomizationEditorProps } from "..";
import FileUploadBox from "../../../fileupload/fileupload";
import { UploadError, UploadResponse } from "../../../fileupload/typings";

import { Button, Box, Typography, Slider } from "@mui/material";
import { styled } from "@mui/system";

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
          data={prop.data}
          onUploadError={(err: UploadError) => {
            alert(err.message);
          }}
          onUploadSuccess={(res: UploadResponse) => {
            let newData = {} as CustomizationData;
            if (res.id === "") {
              const print = prop.data as PrintCustomization;
              newData = {
                ...print,
                front: null,
                back: null,
              };
            } else {
              const print = prop.data as PrintCustomization;
              newData = {
                ...print,
                front: {
                  file: {
                    url: res.url,
                    format: res.extension,
                    name: res.fileName,
                  },
                  Placement: ClothPrintPlacement.Middle,
                  PrintSize: 100,
                } as ClothPrint,
              };
            }
            prop.onUpdated(newData);
          }}
        />
        <Box className="border-b border-neutral-300 p-6 md:p-8">
          <Box className="grid grid-cols-2 gap-4 pb-6">
            <Button className="h-12 rounded text-sm transition-colors bg-neutral-300">
              {" "}
              Front{" "}
            </Button>
            <Button className="h-12 rounded text-sm transition-colors bg-neutral-100 text-neutral-500 hover:bg-neutral-200">
              {" "}
              Back{" "}
            </Button>
          </Box>
          <Box className="relative">
            <Box className="rounded bg-neutral-100 p-4">
              <Typography className="mb-6 overflow-hidden text-ellipsis text-sm text-neutral-500">
                1339.png
              </Typography>
              <Box className="space-x-4">
                <Button className="text-sm font-bold uppercase">
                  {" "}
                  Replace{" "}
                </Button>
                <Button className="text-sm font-bold uppercase">
                  {" "}
                  Delete{" "}
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="mt-6">
            <Box className="mb-2 flex items-center justify-between text-sm">
              <Typography>Print width</Typography>
              <Typography>13 cm</Typography>
            </Box>
            <Slider
              defaultValue={13}
              min={1}
              max={30}
              step={1}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value} cm`}
            />
            <Box className="relative mt-4">
              <Button className="flex w-full items-center justify-between py-2 text-sm">
                <div>Placement</div>
                <Box className="flex items-center space-x-1">
                  <Typography>Middle</Typography>
                  <svg
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 0.485229L6.65685 6.14208L12.3137 0.485228"
                      stroke="black"
                    ></path>
                  </svg>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PrintNodeDataEditor;
