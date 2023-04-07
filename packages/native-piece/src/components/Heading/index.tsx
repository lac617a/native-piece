import React, { FC } from "react";
import { PropsType } from "../../types";
import Box from "../Primitive/Box";

export interface IHeadingProps extends PropsType<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5"
}

const Heading: FC<IHeadingProps> = (props) =>
  <Box as="h2" {...props} />;

export default Heading;