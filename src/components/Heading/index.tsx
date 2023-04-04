import React, { FC } from "react";
import { PropsType } from "../../types";
import Box from "../Primitive/Box";

export interface IHeading extends PropsType {
  as?: "h1" | "h2" | "h3" | "h4" | "h5"
}

const Heading: FC<IHeading> = (props) =>
  <Box as="h2" {...props} />;

export default Heading;