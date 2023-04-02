import React from "react";
import DefaultStack from "./Stack";

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

const TempStack: any = DefaultStack;

const Stack = TempStack as StackComponentsType;

// eslint-disable-next-line react/display-name
TempStack.V = (props: IVStack) => <Stack flexDirection="column" {...props} />;

export default Stack; 