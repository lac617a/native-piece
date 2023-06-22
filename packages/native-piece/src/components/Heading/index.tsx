import React from "react";
import { TypographyStyleOnly } from "../../types";
import CreateStyled from "../../core/createStyled";
import { reactPropsTypes } from "../../utils/flatten";
import { IBaseStyled, ICSSMEDIAProperty } from "../../interfaces";
export interface IHeadingProps extends
  IBaseStyled,
  TypographyStyleOnly,
  ICSSMEDIAProperty<IHeadingProps> {
  /**
   * The component maps the as prop to a range of different HTML element types.
   * For instance, h2 to `<h2>`.
   * If you wish to change that mapping, you can provide your own.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   * }
   * @default 'h2'
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5"
}

const Heading = React.forwardRef<HTMLHeadingElement, IHeadingProps>((inProps, ref) => {
  const HeadingRoot = CreateStyled<IHeadingProps, 'h2'>('h2', inProps);
  return <HeadingRoot ref={ref} {...reactPropsTypes(inProps)} />;
});

export default Heading;