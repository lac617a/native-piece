import React, { FC } from "react";
import { PropType } from "../../../types";
import Box from "../Box";

export interface IParagraph extends PropType {
  as?: "p" | "span"
}

const Paragraph: FC<IParagraph> = (props) =>
  <Box as="p" {...props} />;

export default Paragraph;