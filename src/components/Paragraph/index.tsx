import React, { FC } from "react";
import Box from "../Primitive/Box";
import { PropsType } from "../../types";

export interface IParagraph extends PropsType {
  as?: "p" | "span"
}

const Paragraph: FC<IParagraph> = (props) =>
  <Box as="p" {...props} />;

export default Paragraph;