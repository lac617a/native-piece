import React from "react";
import DefaultStack from "./Stack";

import { PropsType } from "../../../types";

export interface IStack extends PropsType {
  display?: "flex"
}
export interface IVStack extends IStack {
  flexDirection?: "column"
}

export type StackComponentsType = ((
  props: IStack 
) => JSX.Element) & {
  V: React.MemoExoticComponent<
    (props: IVStack) => JSX.Element
  >
}

const TempStack: any = DefaultStack;

const Stack = TempStack as StackComponentsType;

// eslint-disable-next-line react/display-name
TempStack.V = (props: IVStack) => <Stack flexDirection="column" {...props} />;

export default Stack; 