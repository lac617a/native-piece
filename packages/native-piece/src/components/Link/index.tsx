import React from "react";
import { PropsType } from "../../types";
import CreateStyled from "../../core/createStyled";
import { reactPropsTypes } from "../../utils/flatten";

export interface ILinkProps extends Omit<PropsType<"a">, "as"> {
  as?: "a" | "link";
}

const Link = React.forwardRef<HTMLAnchorElement, ILinkProps>((inProps, ref) => {
  const LinkRoot = CreateStyled<ILinkProps, 'a'>('a', inProps);
  return <LinkRoot ref={ref} {...reactPropsTypes(inProps)} />;
});

export default Link;
