import React, { FC } from "react";
import { GridProps } from "styled-system";

import Box from "../Primitive/Box";
import { PropsType } from "../../types";

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

const Grid: FC<IGridProps> = (props) =>
  <Box display="grid" {...props} />;

export default Grid;
