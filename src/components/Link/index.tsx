import React, { FC } from "react";
import Box from "../Primitive/Box";

export interface ILinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  as?: "a";
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}


const Link: FC<ILinkProps> = (props) => 
  <Box as="a" {...props} />;

export default Link;