/* eslint-disable no-prototype-builtins */
import { CSSProperties } from "react";

import { Dict } from "../types";
import humanize from "./humanize";
import { ALLPROPERTY } from "./domStyled";
import isPlainObject from "./isPlainObject";
import hyphenate from "./hyphenateStyleName";
import addUnitIfNeeded from "./addUnitlfNeeded";
import {
  getMediaExact,
  recordMediaQuery,
  findTypeMediaQuery,
} from "./reponsive";

const propertyInclude = (property: string): boolean => {
  const PROPERTY = ALLPROPERTY.some(
    (value) => humanize(value) === humanize(property)
  );
  return PROPERTY;
};

const nativeProps: string[] = [
  "gap",
  "mediaSm",
  "mediaMd",
  "mediaLg",
  "mediaXl",
  "mediaXxl",

  "mediaMinSm",
  "mediaMinMd",
  "mediaMinLg",
  "mediaMinXl",
  "mediaMinXxl",
  ...ALLPROPERTY.map((str) => humanize(str)),
];

const PRE = new RegExp(`^(${nativeProps.join("|")})$`);

/**
 * It's falsish not falsy because 0 is allowed.
 */
const isFalsish = (chunk: any): chunk is undefined | null | false | "" =>
  chunk === undefined || chunk === null || chunk === false || chunk === "";

const objToCssArray = (obj: Dict<any>): string[] => {
  const rules: string[] = [];
  for (const key in obj) {
    const val = obj[key];

    if (!obj.hasOwnProperty(key) || isFalsish(val)) continue;

    if (propertyInclude(key)) {
      rules.push(`${hyphenate(key)}: ${addUnitIfNeeded(key, val)};`);
    } else if (key.startsWith("media")) {
      const { mediaOnly, exactMedia } = findTypeMediaQuery(key);
      const mediaQuery = getMediaExact(mediaOnly)[exactMedia];
      rules.push(
        `@media only screen and ${mediaQuery} {${objToCssArray(val)}}`
      );
    }
  }

  const newRules = new Set([...recordMediaQuery(rules), ...rules]);
  return [...newRules];
};

const getProps = (test: (string: string) => boolean) => (props: any) => {
  const next: any = {};
  for (const key in props) {
    if (test(key || "")) next[key] = props[key];
  }
  return next;
};

const getSystemStyledProps = getProps((regexp: string) => PRE.test(regexp));
export const reactPropsTypes = getProps((regexp: string) => !PRE.test(regexp));

export const systemStyledTypes = (props: CSSProperties): string =>
  objToCssArray({ ...getSystemStyledProps(props) }).join("\n");

// .toString()
//   .replace(new RegExp(",", "g"), "\n");
