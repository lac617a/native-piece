import * as CSS from "csstype";
import { DetailedHTMLProps } from "react";
import { ICSSProperty } from "./interfaces";
import { CSSObject } from "@emotion/styled";

export type PropsType<HTML extends HTMLElement, P = object> = {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
} & ICSSProperty &
  P &
  DetailedHTMLProps<React.AllHTMLAttributes<HTML>, HTML>;

export type Dict<T> = { [key: string]: T };
export type DOMProps = React.DOMAttributes<HTMLElement>;
export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

export type OnlyKey<S> = { [E in keyof S]: E };
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };
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
  | "link"
  | "main"
  | "nav"
  | "ol"
  | "p"
  | "textarea"
  | "section"
  | "span"
  | "ul"
>;
