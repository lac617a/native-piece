import React, { FC } from "react";
import { PropType } from "../../../types";
import Box from "../Box";

export interface IHeading extends PropType {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading: FC<IHeading> = (props) =>
  <Box as="h2" {...props} />;

export default Heading;