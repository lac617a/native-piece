import React from "react";
import DefaultStack from "./Stack";
import { PropsType } from "../../../types";

export interface IStackProps extends
  Omit<PropsType<HTMLDivElement>, "display"> { }
export interface IVStackProps extends
  Omit<IStackProps, "flexDirection" | "msFlexDirection"> { }

type StackComponentsType = ((
  props: IStackProps
) => JSX.Element) & {
  Block: React.MemoExoticComponent<
    (props: IVStackProps) => JSX.Element
  >
}

// COMPONENT's
const TempStack: any = DefaultStack;
const StackBlock = (props: IVStackProps) =>
  <DefaultStack flexDirection="column" {...props} />;

TempStack.Block = StackBlock;

const Stack = TempStack as StackComponentsType;

export default Stack; 