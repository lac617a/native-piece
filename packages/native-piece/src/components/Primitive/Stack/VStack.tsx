import React, { FC } from "react";
import Box from "../Box";
import { IStackProps } from "./Stack";

export interface IVStackProps extends IStackProps { }

const VStack: FC<IVStackProps> = (props) =>
  <Box display="flex" flexDirection="column" {...props} />;

export default VStack;