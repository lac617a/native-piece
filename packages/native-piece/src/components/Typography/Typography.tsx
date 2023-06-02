import React from "react";
import { TypographyProps, FlexboxProps, ColorProps } from "styled-system";

import { KeyofJSXTypography } from "../../types";
import CreateStyled from "../../core/createStyled";
import { reactPropsTypes } from "../../utils/flatten";
import { IBaseStyled, ICSSMEDIAProperty } from "../../interfaces";

export interface ITypographyProps extends
  ColorProps,
  IBaseStyled,
  FlexboxProps,
  TypographyProps,
  ICSSMEDIAProperty<ITypographyProps> {
  /**
   * The component maps the as prop to a range of different HTML element types.
   * For instance, span to `<span>`.
   * If you wish to change that mapping, you can provide your own.
   * @default {
   *   p: 'p',
   *   dl: 'dl',
   *   kbd: 'kbd',
   *   pre: 'pre',
   *   span: 'span',
   *   code: 'code',
   *   mark: 'mark',
   *   abbr: 'habbr',
   *   small: 'small',
   *   blockquote: 'blockquote',
   * }
   * 
   * @default 'p'
   */
  as?: KeyofJSXTypography;
}

const Typography = React.forwardRef<HTMLParagraphElement, ITypographyProps>((inProps, ref) => {
  const TypographyRoot = CreateStyled<ITypographyProps, 'p'>('p', inProps);
  return <TypographyRoot ref={ref} {...reactPropsTypes(inProps)} />;
});

export default Typography;
