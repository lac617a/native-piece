import React from "react";
import { GridProps } from "styled-system";

import { PropsType } from "../../types";
import CreateStyled from "../../core/createStyled";
import { reactPropsTypes } from "../../utils/flatten";

export interface IGridProps extends
  Omit<
    PropsType<
      HTMLDivElement,
      GridProps
    >,
    | "as"
    | "display"
    | "flex"
    | "flexFlow"
    | "flexGrow"
    | "flexWrap"
    | "flexBasis"
    | "flexShrink"
    | "flexDirection"
    | "msFlex"
    | "msFlexFlow"
    | "msFlexGrow"
    | "msFlexWrap"
    | "msFlexBasis"
    | "msFlexShrink"
    | "msFlexDirection"
  > {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

const Grid = React.forwardRef<HTMLDivElement, IGridProps>((inProps, ref) => {
  const GridRoot = CreateStyled<IGridProps>('div', inProps);
  return <GridRoot ref={ref} display="grid" {...reactPropsTypes(inProps)} />
});

export default Grid;
