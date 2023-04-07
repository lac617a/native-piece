import React from "react";
import Box from "../Box";
import { PropsType } from "../../../types";

export interface IStackProps extends Omit<PropsType<HTMLDivElement>, "display" | "as"> { }
export interface IVStackProps extends Omit<IStackProps, "flexDirection" | "msFlexDirection"> { }

type StackComponentsType = ((
  props: IStackProps
) => JSX.Element) & {
  V: React.MemoExoticComponent<
    (props: IVStackProps) => JSX.Element
  >
}

// COMPONENT's
const TempStack: any = (props: IStackProps) => <Box display="flex" {...props} />;
const Stack = TempStack as StackComponentsType;
const StackV = (props: IVStackProps) => <Stack flexDirection="column" {...props} />;
TempStack.V = StackV;
TempStack.Block = StackV;

export default Stack; 