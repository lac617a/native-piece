import React, { FC } from "react";
import Box from "../Primitive/Box";
import { PropsType } from "../../types";

export interface IParagraphProps extends PropsType<HTMLParagraphElement> {
  as?: "p" | "span"
}

const Paragraph: FC<IParagraphProps> = (props) =>
  <Box as="p" {...props} />;

export default Paragraph;