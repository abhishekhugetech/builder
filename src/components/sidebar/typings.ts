import { NodeTypes } from "../flow-zone/nodes/typings";

export interface ColorNodeDataEditorState {
  type: NodeTypes.Color;
  data: { text: string };
}

export interface PrintNodeDataEditorState {
  type: NodeTypes.Print;
  data: { url: string; caption: string };
}

export interface NeckLabelNodeDataEditorState {
  type: NodeTypes.NeckLabel;
  data: { url: string; caption: string };
}

export type NodeDataEditorState =
  | ColorNodeDataEditorState
  | PrintNodeDataEditorState
  | NeckLabelNodeDataEditorState;
