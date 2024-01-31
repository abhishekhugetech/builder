import { ChangeEvent, FC, useCallback, useState } from "react";
import { css } from "@emotion/react";
import {
  ClothColorPair,
  ClothPrint,
  ClothPrintPlacement,
  CustomizationData,
  CustomizationFile,
  CustomizationTypes,
  EventName,
  PrintCustomization,
  getFile,
} from "../../../clothing/typings";
import { CustomizationEditorProps } from "..";
import FileUploadBox from "../../../fileupload/fileupload";
import { UploadError, UploadResponse } from "../../../fileupload/typings";

import {
  Button,
  Box,
  Typography,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { dispatch } from "use-bus";

const PrintNodeDataEditor: FC<CustomizationEditorProps> = (props) => {
  const printCustomization = props.data as PrintCustomization;
  const [isFrontSelected, setFrontSelected] = useState(true);
  const frontFile: CustomizationFile = getFile(props.data, true);
  const backFile: CustomizationFile = getFile(props.data, false);

  // handlePlacementChange updates the placement in current selected file and updates it
  const handlePlacementChange = (e) => {
    const print = props.data as PrintCustomization;
    let newData = {
      ...print,
    };
    if (isFrontSelected) {
      newData.front.Placement = e.target.value;
    } else {
      newData.back.Placement = e.target.value;
    }
    props.onUpdated(newData);
  };

  // handlePlacementSizeChange updates the placement size in the current selected file and updates it
  const handlePlacementSizeChange = (e) => {
    const print = props.data as PrintCustomization;
    let newData = {
      ...print,
    };
    if (isFrontSelected) {
      newData.front.PrintSize = e.target.value;
    } else {
      newData.back.PrintSize = e.target.value;
    }
    props.onUpdated(newData);
  };

  // setCurrentPrintPreview sets the state *isFrontSelected* to update the
  // current UI and sends events to update the ClothingZone
  const setCurrentPrintPreview = (isFront) => {
    setFrontSelected(isFront);
    // Dispatch event to Update ClothingZone Preview
    dispatch({
      type: `${
        isFront
          ? EventName.CustomizationPrintFrontSelected
          : EventName.CustomizationPrintBackSelected
      }`,
      payload: {},
    });
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
          <h2 className="text-xl font-bold md:text-2xl">Print</h2>
        </div>
        <p className="hidden text-sm text-neutral-500 md:block md:text-base">
          Add the print of your choice. Please note that the print has to be
          placed in the printable area.
        </p>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="border-b border-neutral-300 p-6 md:p-8">
          <div className="grid grid-cols-2 gap-4 pb-6">
            <button
              className={`h-12 rounded text-sm transition-colors ${
                isFrontSelected
                  ? "bg-neutral-300"
                  : `bg-neutral-100 text-neutral-500 hover:bg-neutral-200`
              }`}
              onClick={() => {
                setCurrentPrintPreview(true);
              }}
            >
              Front
            </button>
            <button
              className={`h-12 rounded text-sm transition-colors ${
                isFrontSelected
                  ? "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                  : `bg-neutral-300`
              }`}
              onClick={() => {
                setCurrentPrintPreview(false);
              }}
            >
              Back
            </button>
          </div>
          <div className="relative">
            {isFrontSelected ? (
              // Front print upload box
              <FileUploadBox
                isFront={true}
                data={props.data}
                onUploadError={(err: UploadError) => {
                  alert(err.message);
                }}
                onFileRemoved={() => {
                  const print = props.data as PrintCustomization;
                  const newData = {
                    ...print,
                    front: null,
                  };
                  props.onUpdated(newData);
                }}
                onUploadSuccess={(res: UploadResponse) => {
                  const print = props.data as PrintCustomization;
                  const newData = {
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
                  props.onUpdated(newData);
                }}
              />
            ) : (
              // Back print Upload box
              <FileUploadBox
                isFront={false}
                data={props.data}
                onUploadError={(err: UploadError) => {
                  alert(err.message);
                }}
                onFileRemoved={() => {
                  const print = props.data as PrintCustomization;
                  const newData = {
                    ...print,
                    back: null,
                  };
                  props.onUpdated(newData);
                }}
                onUploadSuccess={(res: UploadResponse) => {
                  const print = props.data as PrintCustomization;
                  const newData = {
                    ...print,
                    back: {
                      file: {
                        url: res.url,
                        format: res.extension,
                        name: res.fileName,
                      },
                      Placement: ClothPrintPlacement.Middle,
                      PrintSize: 100,
                    } as ClothPrint,
                  };
                  props.onUpdated(newData);
                }}
              />
            )}
          </div>

          {/* Add Slider */}

          {(isFrontSelected && frontFile != null) ||
          (!isFrontSelected && backFile != null) ? (
            <Box>
              <Box>
                <Box margin={`6px 32px`}>
                  <Box display={`flex`} justifyContent={`space-between`}>
                    <Typography>Print Width</Typography>
                    <Typography>
                      {isFrontSelected
                        ? printCustomization.front?.PrintSize
                        : printCustomization.back?.PrintSize}
                      %
                    </Typography>
                  </Box>
                  <Box margin={`10px 0px`}>
                    <Slider
                      value={
                        isFrontSelected
                          ? printCustomization.front?.PrintSize
                          : printCustomization.back?.PrintSize
                      }
                      min={1}
                      max={100}
                      color="warning"
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
                          value={
                            isFrontSelected
                              ? printCustomization.front?.Placement
                              : printCustomization.back?.Placement
                          }
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
          isFront={true}
          data={props.data}
          onUploadError={(err: UploadError) => {
            alert(err.message);
          }}
          onFileRemoved={() => {
            const print = props.data as PrintCustomization;
            const newData = {
              ...print,
              front: null,
              back: null,
            };
            props.onUpdated(newData);
          }}
          onUploadSuccess={(res: UploadResponse) => {
            const print = props.data as PrintCustomization;
            const newData = {
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
            props.onUpdated(newData);
          }}
        />
        {frontFile == null ? (
          <Box></Box>
        ) : (
          <Box>
            <Box>
              <Box margin={`6px 32px`}>
                <Box display={`flex`} justifyContent={`space-between`}>
                  <Typography>Print Width</Typography>
                  <Typography>
                    {printCustomization.front?.PrintSize} %
                  </Typography>
                </Box>
                <Box margin={`10px 0px`}>
                  <Slider
                    value={printCustomization.front?.PrintSize}
                    min={1}
                    max={100}
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
                        value={printCustomization.front?.Placement}
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
        )}
      </div>
    </div>
  );
};

export default PrintNodeDataEditor;
