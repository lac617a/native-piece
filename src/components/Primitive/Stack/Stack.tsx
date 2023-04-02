import React, { FC } from "react";
import Box from "../Box";
import { IStack } from "./index";

const Stack: FC<IStack> = (props) =>
  <Box display="flex" {...props} />;

export default Stack;