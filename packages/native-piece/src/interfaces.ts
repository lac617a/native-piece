import * as CSS from "csstype";
import { CSSProperties, HTMLProps } from "react";
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
// export type CHTMLProps<H> = HTMLProps<React.HTMLAttributes<H>, H>;

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

// type JsxType = JSX.IntrinsicElements[KeyofJSXType];

export type KeyofJSXType = keyof Pick<
  JSX.IntrinsicElements,
  | "a"
  | "article"
  | "aside"
  | "button"
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

export interface ICSSProperty
  extends IStyledNative,
    Omit<HTMLProps<any>, "color" | "content" | "width" | "height" | "as" | "size"> {}
