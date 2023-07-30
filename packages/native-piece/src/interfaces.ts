import { CSSProperties } from "react";
import { CSSObject } from "@emotion/styled";
import type { CSSOthersObject } from "@emotion/serialize";

export enum size {
  sm = 480,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400,
}

export interface ICSSMEDIAProperty<Styled = ICSSProperty> {
  // MEDIAQUERY
  mediaSm?: Styled;
  mediaMd?: Styled;
  mediaLg?: Styled;
  mediaXl?: Styled;
  mediaXxl?: Styled;

  mediaMinSm?: Styled;
  mediaMinMd?: Styled;
  mediaMinLg?: Styled;
  mediaMinXl?: Styled;
  mediaMinXxl?: Styled;
}

export interface IBaseStyled {
  className?: string;
  sx?: CSSOthersObject;
  selectors?: CSSObject;
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}
export interface IStyledNative
  extends Omit<CSSProperties, "translate">,
    ICSSMEDIAProperty,
    IBaseStyled {}

export interface ICSSProperty extends IStyledNative {}
