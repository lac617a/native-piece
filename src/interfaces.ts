import * as CSS from "csstype";
import { CSSProperties, HTMLProps } from "react";
import { CSSObject } from "@emotion/styled";
import { BackgroundProps, ColorProps, SpaceProps } from "styled-system";

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
// export type CHTMLProps<H> = HTMLProps<React.HTMLAttributes<H>, H>;

interface IStyled
  extends Omit<
      CSSProperties,
      | "translate"
      // SPACES
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
      // COLORS
      | "color"
      | "opacity"
      | "background"
      | "backgroundSize"
      | "backgroundImage"
      | "backgroundColor"
      | "backgroundRepeat"
      | "backgroundPosition"
    >,
    ICSSMEDIAProperty,
    SpaceProps,
    ColorProps,
    BackgroundProps,
    Omit<HTMLProps<any>, "color" | "content" | "width" | "height"> {}

// type JsxType = JSX.IntrinsicElements[KeyofJSXType];

export type KeyofJSXType = keyof Pick<
  JSX.IntrinsicElements,
  | "a"
  | "article"
  | "aside"
  | "div"
  | "footer"
  | "figcaption"
  | "figure"
  | "form"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "header"
  | "img"
  | "input"
  | "label"
  | "li"
  | "main"
  | "nav"
  | "ol"
  | "p"
  | "section"
  | "span"
  | "ul"
>;

export interface ICSSProperty extends IStyled {
  as?: KeyofJSXType;
  className?: string;
  pseudos?: CSSPseudos;
}