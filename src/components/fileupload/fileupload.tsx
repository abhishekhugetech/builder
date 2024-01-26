import React, { useState, useRef, FC } from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  ImageBBUploadResponse,
  UploadError,
  UploadErrorType,
  UploadResponse,
} from "./typings";

export interface UploadProps {
  onUploadError: (error: UploadError) => void;
  onUploadSuccess: (file: UploadResponse) => void;
  data: CustomizationData;
}

import { Button, Slider } from "@mui/material";
import { styled } from "@mui/system";
import {
  CustomizationData,
  CustomizationFile,
  CustomizationTypes,
  NeckLabelCustomization,
  PrintCustomization,
  getFrontFile,
} from "../clothing/typings";

const FileUploadBox: FC<UploadProps> = (props) => {
  console.log("rendered file upload", props);

  const StyledCard = styled(Box)(({ theme }) => ({
    backgroundColor: "#eee", // Set your desired background color
    borderRadius: "3px",
    padding: theme.spacing(2),
    margin: "20px 32px",
  }));

  const BoldTypo = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: "bold",
  }));

  const [selectedFile, setFile] = useState(null);
  // Remove if don't want to upload same file again and rerender
  const inputRef = useRef(null);

  const handleFileChange = async (e) => {
    console.log(e);

    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (!selectedFile) {
      props.onUploadError({
        errorType: UploadErrorType.UserError,
        message: "No file selected",
      });
      return;
    }

    const apiUrl = "https://api.imgbb.com/1/upload";
    const apiKey = "a7a3b53a5fa2b1038b509e4103cf1af4";

    const formData = new FormData();
    formData.append("key", apiKey);
    formData.append("image", selectedFile);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      console.log(response);

      if (response.ok) {
        const result =
          await (response.json() as Promise<ImageBBUploadResponse>);
        console.log("Response OK from Image Upload service:", result);
        // Handle the result as needed
        if (!result.success) {
          console.error("Upload failed:");
          props.onUploadError({
            errorType: UploadErrorType.APIError,
            message: response.statusText,
          });
          return;
        }

        // Clear the input value to allow selecting the same file again
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        props.onUploadSuccess({
          extension: result.data.image.extension,
          fileName: result.data.image.filename,
          height: result.data.height,
          width: result.data.width,
          id: result.data.id,
          mime: result.data.image.mime,
          size: result.data.size,
          url: result.data.image.url,
          front: true,
        });
        return;
      } else {
        console.error("Upload failed:");
        props.onUploadError({
          errorType: UploadErrorType.APIError,
          message: response.statusText,
        });
      }
    } catch (error) {
      console.error("Error during upload:", error);
      props.onUploadError({
        errorType: UploadErrorType.InternalError,
        message: error,
      });
    }
  };

  const onDesignDelete = () => {
    props.onUploadSuccess({
      extension: "",
      fileName: "",
      height: 0,
      width: 0,
      id: "",
      mime: "",
      size: 0,
      url: "",
      front: true,
    });
  };

  const onDesignReplaced = () => {
    inputRef.current.click();
  };

  const currentFile: CustomizationFile = getFrontFile(props.data);

  return (
    <div>
      <input
        ref={inputRef}
        id="fileInput"
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {currentFile == null ? (
        <div>
          <label htmlFor="fileInput">
            <Box
              border="2px dashed #888"
              borderRadius={4}
              p={2}
              margin={"20px 32px"}
              textAlign="center"
              css={css`
                cursor: pointer;
              `}
              position="relative"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  width={30}
                  height={30}
                  bgcolor="#f5f5f5"
                >
                  <AddCircleOutlineIcon
                    fontSize="large"
                    style={{ color: "#000" }}
                  />
                </Box>
              </Box>
              <Typography color={"#737373"} variant="body2" mt={1}>
                Add a design file
              </Typography>
            </Box>
          </label>
        </div>
      ) : (
        <div>
          <StyledCard>
            <div
              css={css`
                display: flex;
                justify-content: start;
                margin-left: 10px;
              `}
            >
              <Typography
                css={css`
                  font-size: 13px;
                `}
              >
                {currentFile.name}
              </Typography>
            </div>
            <div
              css={css`
                display: flex;
                justify-content: space-evenly;
                margin-top: 10px;
              `}
            >
              <BoldTypo onClick={onDesignReplaced}>Replace</BoldTypo>
              <BoldTypo onClick={onDesignDelete}>Delete</BoldTypo>
            </div>
          </StyledCard>
        </div>
      )}
    </div>
  );
};

export default FileUploadBox;
