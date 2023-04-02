import * as CSS from "csstype";
import { CSSProperties } from "react";
import { CSSObject } from "@emotion/styled";
import { ColorProps, SpaceProps } from "styled-system";
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export enum size {
  sm = 480,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400,
}

export type OnlyKey<S> = { [E in keyof S]: E };
// type Excludes<T, U> = keyof T extends keyof U ? U : T;

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
// export interface ICSSProperty
//   extends ICSSMEDIAProperty, Excludes<CSSProperties, SpaceProps>, ColorProps {
//   as?: keyof JSX.IntrinsicElements;
//   pseudos?: CSSPseudos;
// }

export interface ICSSProperty
  extends Omit<
      CSSProperties,
      | "padding"
      | "paddingTop"
      | "paddingLeft"
      | "paddingRight"
      | "paddingBottom"
      | "margin"
      | "marginTop"
      | "marginLeft"
      | "marginRight"
      | "marginBottom"
      | "color"
      | "opacity"
      | "backgroundColor"
    >,
    ICSSMEDIAProperty,
    SpaceProps,
    ColorProps {
  as?: keyof JSX.IntrinsicElements;
  pseudos?: CSSPseudos;
}
