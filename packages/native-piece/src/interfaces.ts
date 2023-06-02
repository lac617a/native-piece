import { CSSProperties } from "react";
import { ColorProps, SpaceProps } from "styled-system";
import { CSSPseudos } from "./types";

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
  pseudos?: CSSPseudos;
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}
export interface IStyledNative
  extends Omit<CSSProperties, "translate">,
    ICSSMEDIAProperty,
    Omit<
      SpaceProps,
      | "margin"
      | "marginTop"
      | "marginLeft"
      | "marginRight"
      | "marginBottom"
      | "padding"
      | "paddingTop"
      | "paddingLeft"
      | "paddingRight"
      | "paddingBottom"
    >,
    Omit<
      ColorProps,
      | "color"
      | "opacity"
      | "background"
      | "backgroundSize"
      | "backgroundImage"
      | "backgroundColor"
      | "backgroundRepeat"
      | "backgroundPosition"
    >,
    IBaseStyled {}

export interface ICSSProperty extends IStyledNative {}
