import { CSSProperties } from "react";
import * as CSS from "csstype";
import { CSSObject } from "@emotion/styled";
import { IBaseStyled, ICSSMEDIAProperty, ICSSProperty } from "./interfaces";

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

export type PropsType<HTML extends keyof JSX.IntrinsicElements = "div"> = {
  as?: KeyofJSXType;
} & ICSSProperty &
  JSX.IntrinsicElements[HTML];

export type Dict<T> = { [key: string]: T };
export type DOMProps = React.DOMAttributes<HTMLElement>;
export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

export type OnlyKey<S> = { [E in keyof S]: E };
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

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

export type TypographyProperty = Pick<
  CSSProperties,
  | "alignSelf"
  | "bottom"
  | "border"
  | "borderBlock"
  | "borderBlockColor"
  | "borderBlockStyle"
  | "borderInline"
  | "borderInlineColor"
  | "borderInlineStyle"
  | "borderTop"
  | "borderTopColor"
  | "borderTopStyle"
  | "borderRight"
  | "borderRightColor"
  | "borderRightStyle"
  | "borderBottom"
  | "borderBottomStyle"
  | "borderBottomColor"
  | "borderLeft"
  | "borderLeftColor"
  | "borderLeftStyle"
  | "backgroundColor"
  | "boxShadow"
  | "boxSizing"
  | "color"
  | "flex"
  | "fontSize"
  | "fontFamily"
  | "fontStyle"
  | "fontWeight"
  | "flexBasis"
  | "height"
  | "inset"
  | "justifySelf"
  | "left"
  | "lineHeight"
  | "margin"
  | "marginBlock"
  | "marginInline"
  | "marginTop"
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "maxHeight"
  | "maxWidth"
  | "minHeight"
  | "minWidth"
  | "overflow"
  | "position"
  | "padding"
  | "paddingBlock"
  | "paddingInline"
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "pointerEvents"
  | "right"
  | "userSelect"
  | "transform"
  | "transition"
  | "transitionDelay"
  | "transitionDuration"
  | "transitionProperty"
  | "transitionTimingFunction"
  | "top"
  | "textAlign"
  | "textAlignLast"
  | "textCombineUpright"
  | "textAnchor"
  | "textTransform"
  | "textOrientation"
  | "textDecoration"
  | "textDecorationSkip"
  | "textDecorationStyle"
  | "textDecorationColor"
  | "textDecorationLine"
  | "textDecorationThickness"
  | "textDecorationSkipInk"
  | "textEmphasis"
  | "textEmphasisColor"
  | "textEmphasisPosition"
  | "textEmphasisStyle"
  | "textIndent"
  | "textRendering"
  | "textSizeAdjust"
  | "textUnderlineOffset"
  | "textUnderlinePosition"
  | "textOverflow"
  | "textJustify"
  | "textShadow"
  | "visibility"
  | "verticalAlign"
  | "width"
  | "wordSpacing"
  | "writingMode"
  | "wordBreak"
  | "wordWrap"
  | "whiteSpace"
  | "zIndex"
  | "quotes"
  | "opacity"
  | "overflowWrap"
  | "hyphens"
  | "hyphenateCharacter"
>;

export type TypographyStyleOnly = {
  style?: TypographyProperty;
} & TypographyProperty &
  IBaseStyled &
  ICSSMEDIAProperty<TypographyProperty>;
