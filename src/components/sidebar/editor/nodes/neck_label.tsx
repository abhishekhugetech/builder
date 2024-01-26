import { ChangeEvent, FC, useCallback } from "react";
import { css } from "@emotion/react";
import { shallow } from "zustand/shallow";
import {
  CustomizationData,
  CustomizationFile,
  NeckLabelCustomization,
  NeckLabelSize,
  NeckPrintSize,
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

const NeckLabelNodeDataEditor: FC<CustomizationEditorProps> = (props) => {
  // get default print customization
  const printCustomization = props.data as NeckLabelCustomization;
  const handleLabelSizeChange = (e) => {
    const neck = props.data as NeckLabelCustomization;
    let newData = {
      ...neck,
    };
    newData.label.labelSize = e.target.value;
    props.onUpdated(newData);
  };
  const handlePrintSizeChange = (e) => {
    const neck = props.data as NeckLabelCustomization;
    let newData = {
      ...neck,
    };
    newData.label.labelPrintSize = e.target.value;
    props.onUpdated(newData);
  };
  const currentFile: CustomizationFile = getFrontFile(props.data);

  return (
    <div
      css={css`
        padding: 16px 28px;
        border-bottom: 1px solid lightblue;
        font-weight: 500;
      `}
    >
      <p>Add your own personalized neck label</p>
      <div>
        <FileUploadBox
          data={props.data}
          onUploadError={(err: UploadError) => {
            alert(err.message);
          }}
          onFileRemoved={() => {
            const neck = props.data as NeckLabelCustomization;
            const newData = {
              ...neck,
            };
            newData.label = null;
            props.onUpdated(newData);
          }}
          onUploadSuccess={(res: UploadResponse) => {
            const neck = props.data as NeckLabelCustomization;
            const newData = {
              ...neck,
              label: {
                file: {
                  url: res.url,
                  format: res.extension,
                  name: res.fileName,
                },
                labelSize: NeckLabelSize.Large,
                labelPrintSize: NeckPrintSize.Medium,
              },
            };
            props.onUpdated(newData);
          }}
        />

        {currentFile == null ? (
          <Box></Box>
        ) : (
          <Box>
            <Box margin={`6px 32px`}>
              {/* Neck Label Size */}
              <Box display={`flex`} justifyContent={`space-between`}>
                <Typography>Label size</Typography>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="neck-label-size-placement-label">
                      Size
                    </InputLabel>
                    <Select
                      labelId="neck-label-size-placement-label"
                      id="neck-label-size-placement"
                      value={printCustomization.label?.labelSize}
                      label="Size"
                      onChange={handleLabelSizeChange}
                    >
                      <MenuItem value={NeckLabelSize.Small}>Small</MenuItem>
                      <MenuItem value={NeckLabelSize.Large}>Large</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/* Neck Print Size */}
              <Box
                display={`flex`}
                justifyContent={`space-between`}
                marginTop={`20px`}
              >
                <Typography>Print size</Typography>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="neck-print-size-placement-label">
                      PrintSize
                    </InputLabel>
                    <Select
                      labelId="neck-print-size-placement-label"
                      id="neck-print-size-placement"
                      value={printCustomization.label?.labelPrintSize}
                      label="PrintSize"
                      onChange={handlePrintSizeChange}
                    >
                      <MenuItem value={NeckPrintSize.ExtraSmall}>
                        Extra Small
                      </MenuItem>
                      <MenuItem value={NeckPrintSize.Small}>Small</MenuItem>
                      <MenuItem value={NeckPrintSize.Medium}>Medium</MenuItem>
                      <MenuItem value={NeckPrintSize.Large}>Large</MenuItem>
                      <MenuItem value={NeckPrintSize.ExtraLarge}>
                        Extra Large
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default NeckLabelNodeDataEditor;
