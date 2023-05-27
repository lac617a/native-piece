import React from "react";
import Box from "../Box";
import { PropsType } from "../../../types";

export interface IStackProps extends PropsType<HTMLDivElement> {}

const Stack = React.forwardRef<HTMLDivElement, IStackProps>((inProps, ref) => <Box ref={ref as any} display="flex" {...inProps} />);

export default Stack;