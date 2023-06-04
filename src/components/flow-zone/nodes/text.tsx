import { FC } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { css } from "@emotion/react";
import { MessageCircle } from "lucide-react";
import { TextNodeData } from "./typings";

const TextNode: FC<NodeProps<TextNodeData>> = ({ data, selected }) => {
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
              border: 1px solid coral;
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
          <MessageCircle height={18} width={18} />
        </div>
        <div
          css={css`
            background: white;
            padding: 12px 16px;
            border-radius: 0 0 8px 8px;
          `}
        >
          {data.text}
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="source" />
    </>
  );
};

export default TextNode;
