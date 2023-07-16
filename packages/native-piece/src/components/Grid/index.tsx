import React from "react";
import { GridProps } from "styled-system";
import { PropsType } from "../../types";
import Box from "../Primitive/Box";

export interface IGridProps extends
  Omit<
    PropsType & GridProps,
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
}

const Grid = React.forwardRef<HTMLDivElement, IGridProps>((inProps, ref) =>
  <Box ref={ref as any} aria-label="NP-Grid" display="grid" {...inProps} />);

export default Grid;
