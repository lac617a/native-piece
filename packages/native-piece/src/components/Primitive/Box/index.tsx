import React from "react";
import { PropsType } from "../../../types";
import CreateStyled from "../../../core/createStyled";
import { reactPropsTypes } from "../../../utils/flatten";

export interface IBoxProps extends PropsType<HTMLDivElement> { }

const Box = React.forwardRef<HTMLDivElement, IBoxProps>((inProps, ref) => {
  const BoxRoot = CreateStyled<IBoxProps>('div', inProps);
  return <BoxRoot ref={ref} {...reactPropsTypes(inProps)} />;
});

export default Box;
