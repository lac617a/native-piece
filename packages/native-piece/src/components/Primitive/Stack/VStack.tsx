import React from "react";
import Stack, { IStackProps } from "./Stack";

export interface IVStackProps extends IStackProps { }

const VStack = React.forwardRef<HTMLDivElement, IVStackProps>((inProps, ref) => 
  <Stack ref={ref as any} display="flex" flexDirection="column" {...inProps} />);

export default VStack;