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
  const handlePlacementSizeChange = (e) => {
    const print = props.data as PrintCustomization;
    let newData = {
      ...print,
    };
    newData.front.PrintSize = e.target.value;
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
