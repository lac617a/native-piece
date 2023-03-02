import React, { FC } from "react";
import Stack from ".";
import { IVStack } from "./types";

const VStack: FC<IVStack> = (props) =>
  <Stack flexDirection="column" {...props} />;

export default VStack;
