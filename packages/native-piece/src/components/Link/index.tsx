import React, { FC } from "react";
import Box from "../Primitive/Box";
import { IStyledNative } from "../../interfaces";

export interface ILinkProps extends Omit<IStyledNative, "color" | "translate" | "content">,
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

const Link: FC<ILinkProps> = (props) =>
  <Box as="a" {...props} />;

export default Link;