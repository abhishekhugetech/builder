import { FC } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { css } from "@emotion/react";
import CustomImage from "../../../shared/components/image";
import { ImageNodeData } from "./typings";
import { Image } from "lucide-react";

const ImageNode: FC<NodeProps<ImageNodeData>> = ({ data, selected }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id="target" />
      <div
        css={css(
          css`
            border-radius: 8px;
            min-width: 240px;
            border: 1px solid lightblue;
          `,
          selected &&
            css`
              border-color: coral;
            `
        )}
      >
        <div
          css={css`
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid lightblue;
            background: aliceblue;
            border-radius: 8px 8px 0 0;
          `}
        >
          <p>Send Message</p>
          <Image height={18} width={18} />
        </div>
        <div
          css={css`
            background: white;
            padding: 12px 16px;
            border-radius: 0 0 8px 8px;
          `}
        >
          <CustomImage
            css={css`
              max-width: 300px;
              border-radius: 8px;
              max-height: 300px;
              object-fit: contain;
              margin-bottom: 12px;
            `}
            src={data.url}
            alt={data.caption}
          />
          {data.caption && <p css={css``}>{data.caption}</p>}
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="source" />
    </>
  );
};

export default ImageNode;
