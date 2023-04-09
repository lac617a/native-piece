import React, { FC } from "react";
import Box from "../Box";
import { IStackProps } from ".";

const Stack: FC<IStackProps> = (props) =>
  <Box display="flex" {...props} />;

export default Stack;