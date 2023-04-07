import React, { FC } from "react";
import Box from "../Primitive/Box";
import { PropsType } from "../../types";
export interface ILinkProps extends PropsType<HTMLAnchorElement> {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
  as?: "a" | "link";
}

const Link: FC<ILinkProps> = (props) =>
  <Box as="a" {...props} />;

export default Link;