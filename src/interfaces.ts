import { CSSProperties } from "react";

export enum size {
  sm = 480,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1400,
}

export type OnlyKey<S> = { [E in keyof S]: E };

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

export interface ICSSProperty extends CSSProperties, ICSSMEDIAProperty {
  as?: keyof JSX.IntrinsicElements;
}
