import { MutableRefObject } from "react";
import { PropType } from "../../../types";

export interface IStack extends PropType {
  display?: "flex"
}
export interface IVStack extends IStack {
  flexDirection?: "column"
}

export type StackComponentsType = ((
  props: IStack & { ref?: MutableRefObject<any>}
) => JSX.Element) & {
  V: React.MemoExoticComponent<
    (props: IVStack & { ref?: MutableRefObject<any>}) => JSX.Element
  >
}