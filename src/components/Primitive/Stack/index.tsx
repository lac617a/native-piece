import DefaultStack from "./Stack";
import VStack from "./VStack";
import { StackComponentsType, IStack, IVStack } from "./types";

const TempStack: any = DefaultStack;

TempStack.V = VStack;

const Stack = TempStack as StackComponentsType;

export type { IStack, IVStack };
export default Stack; 