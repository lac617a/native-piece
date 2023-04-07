import { CSSProperties } from "react";
import { ColorProps, SpaceProps } from "styled-system";
import { CSSPseudos, KeyofJSXType } from "./types";

export enum size {
  sm = 480,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400,
}

export interface ICSSMEDIAProperty {
  // MEDIAQUERY
  mediaSm?: ICSSProperty;
  mediaMd?: ICSSProperty;
  mediaLg?: ICSSProperty;
  mediaXl?: ICSSProperty;
  mediaXxl?: ICSSProperty;

  mediaMinSm?: ICSSProperty;
  mediaMinMd?: ICSSProperty;
  mediaMinLg?: ICSSProperty;
  mediaMinXl?: ICSSProperty;
  mediaMinXxl?: ICSSProperty;
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
    > {
  as?: KeyofJSXType;
  className?: string;
  pseudos?: CSSPseudos;
}


export interface ICSSProperty extends IStyledNative {}
