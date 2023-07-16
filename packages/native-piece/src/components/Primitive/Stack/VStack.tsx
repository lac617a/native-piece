import React from "react";
import Stack, { IStackProps } from "./Stack";

export interface IVStackProps extends IStackProps { }

const VStack = React.forwardRef<HTMLDivElement, IVStackProps>((inProps, ref) => 
  <Stack ref={ref as any} aria-label="NP-VStack" flexDirection="column" {...inProps} />);

export default VStack;