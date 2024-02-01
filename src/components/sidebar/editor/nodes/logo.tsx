import { FC } from "react";
import { css } from "@emotion/react";
import { CustomizationEditorProps } from "..";

import {
  Box,
  Typography,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FileUploadBox from "../../../fileupload/fileupload";
import { UploadError, UploadResponse } from "../../../fileupload/typings";
import {
  ClothPrintPlacement,
  CustomizationFile,
  LogoCustomization,
} from "../../../clothing/typings";

const LogoNodeDataEditor: FC<CustomizationEditorProps> = (props) => {
  const logoCustomization = props.data as LogoCustomization;
  const file: CustomizationFile = logoCustomization.file;

  // handlePlacementChange updates the placement in current selected file and updates it
  const handlePlacementChange = (e) => {
    const logo = props.data as LogoCustomization;
    let newData = {
      ...logo,
    };
    newData.Placement = e.target.value;
    props.onUpdated(newData);
  };

  // handlePlacementSizeChange updates the placement size in the current selected file and updates it
  const handlePlacementSizeChange = (e) => {
    const logo = props.data as LogoCustomization;
    let newData = {
      ...logo,
    };
    newData.PrintSize = e.target.value;
    props.onUpdated(newData);
  };

  return (
    <div className="_panel_7tbke_2 customizer-side-panel flex w-full flex-col border-t border-neutral-200 bg-white md:w-96 md:flex-initial md:overflow-hidden md:border-l md:border-t-0 md:border-neutral-300 absolute inset-y-0 right-0">
      <div className="border-b border-neutral-300 px-6 py-5 md:p-8">
        <div className="flex items-center md:mb-4">
          <a
            onClick={props.onDeselectCustomization}
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
          <h2 className="text-xl font-bold md:text-2xl">Logo</h2>
        </div>
        <p className="hidden text-sm text-neutral-500 md:block md:text-base">
          Customize the logo you want to print on your wearable.
        </p>
      </div>

      {/* Design Upload block */}
      <div className="flex-1 overflow-auto">
        <div className="border-b border-neutral-300 p-6 md:p-8">
          <div className="relative">
            {true ? (
              // Front print upload box
              <FileUploadBox
                isFront={true}
                data={props.data}
                onUploadError={(err: UploadError) => {
                  alert(err.message);
                }}
                onFileRemoved={() => {
                  const logo = props.data as LogoCustomization;
                  const newData = {
                    ...logo,
                    file: null,
                    Placement: null,
                    PrintSize: null,
                  };
                  props.onUpdated(newData);
                }}
                onUploadSuccess={(res: UploadResponse) => {
                  const logo = props.data as LogoCustomization;
                  const newData = {
                    ...logo,
                    file: {
                      url: res.url,
                      format: res.extension,
                      name: res.fileName,
                    },
                    Placement: ClothPrintPlacement.Right,
                    PrintSize: 100,
                  } as LogoCustomization;
                  props.onUpdated(newData);
                }}
              />
            ) : (
              // Back print Upload box
              <div></div>
            )}
          </div>

          {/* Add Slider */}

          {file != null ? (
            <Box>
              <Box>
                <Box margin={`6px 32px`}>
                  <Box display={`flex`} justifyContent={`space-between`}>
                    <Typography>Print Width</Typography>
                    <Typography>{logoCustomization.PrintSize} %</Typography>
                  </Box>
                  <Box margin={`10px 0px`}>
                    <Slider
                      value={logoCustomization.PrintSize}
                      min={1}
                      max={100}
                      color="primary"
                      step={1}
                      valueLabelDisplay="auto"
                      onChange={handlePlacementSizeChange}
                      valueLabelFormat={(value) => `${value} %`}
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box margin={`6px 32px`}>
                  <Box display={`flex`} justifyContent={`space-between`}>
                    <Typography>Placement</Typography>
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel id="print-label-placement-label">
                          Placement
                        </InputLabel>
                        <Select
                          labelId="print-label-placement-label"
                          id="print-label-placement"
                          value={logoCustomization.Placement}
                          label="Placement"
                          onChange={handlePlacementChange}
                        >
                          <MenuItem value={ClothPrintPlacement.TopLeft}>
                            Top Left
                          </MenuItem>
                          <MenuItem value={ClothPrintPlacement.TopMiddle}>
                            Top Middle
                          </MenuItem>
                          <MenuItem value={ClothPrintPlacement.TopRight}>
                            Top Right
                          </MenuItem>
                          <MenuItem value={ClothPrintPlacement.Left}>
                            Left
                          </MenuItem>
                          <MenuItem value={ClothPrintPlacement.Middle}>
                            Middle
                          </MenuItem>
                          <MenuItem value={ClothPrintPlacement.Right}>
                            Right
                          </MenuItem>
                          <MenuItem value={ClothPrintPlacement.BottomLeft}>
                            Bottom Left
                          </MenuItem>
                          <MenuItem value={ClothPrintPlacement.BottomMiddle}>
                            Bottom Middle
                          </MenuItem>
                          <MenuItem value={ClothPrintPlacement.BottomRight}>
                            Bottom Right
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box></Box>
          )}
        </div>
        {/* Pricing Box (TODO: Make Dynamic) */}
        <div
          className="border-b border-neutral-300 p-6 md:p-8"
          css={css`
            display: none;
          `}
        >
          <div className="mb-4 flex justify-between text-[10px] text-neutral-500">
            <span>Print Surface Area</span>
            <span>Price pr. item</span>
          </div>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between transition-opacity opacity-40">
              <span className="text-neutral-500">0% - 20%</span>
              <span>2.50 €</span>
            </li>
            <li className="flex justify-between transition-opacity">
              <span className="text-neutral-500">21% - 40%</span>
              <span>3.50 €</span>
            </li>
            <li className="flex justify-between transition-opacity opacity-40">
              <span className="text-neutral-500">41% - 60%</span>
              <span>4.50 €</span>
            </li>
            <li className="flex justify-between transition-opacity opacity-40">
              <span className="text-neutral-500">61% - 80%</span>
              <span>5.50 €</span>
            </li>
            <li className="flex justify-between transition-opacity opacity-40">
              <span className="text-neutral-500">81% - 100%</span>
              <span>6.50 €</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden border-t border-neutral-300 px-6 py-8 md:block">
        <div className="flex items-center">
          <a
            onClick={props.onDeselectCustomization}
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
};

export default LogoNodeDataEditor;
