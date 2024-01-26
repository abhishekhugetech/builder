import { ChangeEvent, FC, useCallback } from "react";
import { css } from "@emotion/react";
import {
  ClothColorPair,
  ClothPrint,
  ClothPrintPlacement,
  CustomizationData,
  CustomizationFile,
  CustomizationTypes,
  PrintCustomization,
  getFrontFile,
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

const PrintNodeDataEditor: FC<CustomizationEditorProps> = (props) => {
  const printCustomization = props.data as PrintCustomization;
  const handlePlacementChange = (e) => {
    const print = props.data as PrintCustomization;
    let newData = {
      ...print,
    };
    newData.front.Placement = e.target.value;
    props.onUpdated(newData);
  };
  const currentFile: CustomizationFile = getFrontFile(props.data);
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
          data={props.data}
          onUploadError={(err: UploadError) => {
            alert(err.message);
          }}
          onUploadSuccess={(res: UploadResponse) => {
            let newData = {} as CustomizationData;
            if (res.id === "") {
              const print = props.data as PrintCustomization;
              newData = {
                ...print,
                front: null,
                back: null,
              };
            } else {
              const print = props.data as PrintCustomization;
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
            props.onUpdated(newData);
          }}
        />
        {currentFile == null ? (
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
                    defaultValue={printCustomization.front?.PrintSize}
                    min={1}
                    max={100}
                    step={1}
                    valueLabelDisplay="auto"
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
                        <MenuItem value={ClothPrintPlacement.Left}>
                          Left
                        </MenuItem>
                        <MenuItem value={ClothPrintPlacement.Middle}>
                          Middle
                        </MenuItem>
                        <MenuItem value={ClothPrintPlacement.Right}>
                          Right
                        </MenuItem>
                        <MenuItem value={ClothPrintPlacement.TopLeft}>
                          Top Left
                        </MenuItem>
                        <MenuItem value={ClothPrintPlacement.TopMiddle}>
                          Top Middle
                        </MenuItem>
                        <MenuItem value={ClothPrintPlacement.TopRight}>
                          Top Right
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
