import { CSSProperties } from "react";
import * as CSS from "csstype";
import { CSSObject } from "@emotion/styled";
import { ICSSProperty } from "./interfaces";

export type PropsType<HTML extends keyof JSX.IntrinsicElements = "div"> = {
  as?: KeyofJSXType;
} & ICSSProperty &
  JSX.IntrinsicElements[HTML];

export type Dict<T> = { [key: string]: T };
export type DOMProps = React.DOMAttributes<HTMLElement>;
export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

export type OnlyKey<S> = { [E in keyof S]: E };
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export type TypographyStyleOnly = Pick<
  CSSProperties,
  | "color"
  | "backgroundColor"
  | "fontSize"
  | "fontFamily"
  | "fontStyle"
  | "fontWeight"
  | "flex"
  | "flexBasis"
  | "alignSelf"
  | "justifySelf"
  | "margin"
  | "marginBlock"
  | "marginInline"
  | "marginTop"
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "lineHeight"
  | "padding"
  | "paddingBlock"
  | "paddingInline"
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "textAlign"
  | "textAnchor"
  | "textDecoration"
  | "textDecorationColor"
  | "textDecorationLine"
  | "textOverflow"
  | "textJustify"
  | "wordBreak"
  | "wordWrap"
  | "whiteSpace"
>;

export type KeyofJSXTypography = keyof Pick<
  JSX.IntrinsicElements,
  | "p"
  | "dl"
  | "kbd"
  | "pre"
  | "span"
  | "code"
  | "mark"
  | "abbr"
  | "small"
  | "blockquote"
>;

export type KeyofJSXType = keyof Pick<
  JSX.IntrinsicElements,
  | "article"
  | "aside"
  | "footer"
  | "figcaption"
  | "figure"
  | "form"
  | "header"
  | "input"
  | "label"
  | "li"
  | "main"
  | "nav"
  | "ol"
  | "textarea"
  | "section"
  | "ul"
>;
