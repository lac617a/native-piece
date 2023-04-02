import React from "react";
import DefaultStack from "./Stack";
import { StackComponentsType, IStack, IVStack } from "./types";

const TempStack: any = DefaultStack;

const Stack = TempStack as StackComponentsType;

// eslint-disable-next-line react/display-name
TempStack.V = (props: IVStack) => <Stack flexDirection="column" {...props} />;

export type { IStack, IVStack };
export default Stack; 