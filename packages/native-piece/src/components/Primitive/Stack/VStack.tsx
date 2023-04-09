import React, { FC } from "react";
import Box from "../Box";
import { IVStackProps } from ".";

const VStack: FC<IVStackProps> = (props) =>
  <Box display="flex" flexDirection="column" {...props} />;

export default VStack;