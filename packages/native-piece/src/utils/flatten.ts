import { Dict } from "../types";
import humanize from "./humanize";
import { ALLPROPERTY } from "./domStyled";
import hyphenate from "./hyphenateStyleName";
import addUnitIfNeeded from "./addUnitlfNeeded";
import {
  getMediaExact,
  recordMediaQuery,
  findTypeMediaQuery,
} from "./reponsive";
import isFunction from "./isFunction";
import { ICSSProperty } from "../interfaces";
import isPlainObject, { isObjectEmpty } from "./isPlainObject";

const nativeProps: string[] = [
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
  if (isObjectEmpty(obj)) return rules;
  for (const key in obj) {
    const val = obj[key];

    if (!obj.hasOwnProperty(key) || isFalsish(val)) continue;

    if (Array.isArray(val) || isFunction(val)) {
      rules.push(`${hyphenate(key)}:`, val, ";");
    } else if (key.startsWith("media")) {
      const { mediaOnly, exactMedia } = findTypeMediaQuery(key);
      const mediaQuery = getMediaExact(mediaOnly)[exactMedia];
      rules.push(
        `@media only screen and ${mediaQuery} {${objToCssArray(val).join(" ")}}`
      );
    } else if (isPlainObject(val)) {
      rules.push(`${key} {`, ...objToCssArray(val), "}");
    } else {
      rules.push(`${hyphenate(key)}: ${addUnitIfNeeded(key, val)};`);
    }
  }
  const newRules = new Set([...recordMediaQuery(rules), ...rules]);
  return [...newRules];
};

export const objSelectorsToCssArray = (obj: Dict<any>): string | null => {
  const rules: string[] = [];
  if (isFalsish(obj)) return null;
  for (const key in obj) {
    const val = obj[key];
    if (!obj.hasOwnProperty(key) || isFalsish(val)) continue;
    if (isPlainObject(val)) {
      rules.push(`${key} { ${objToCssArray(val)} }`);
    } else {
      rules.push(`${hyphenate(key)}: ${addUnitIfNeeded(key, val)};`);
    }
  }
  return rules.join(" ").replaceAll(",", " ");
};

const getProps = (test: (string: string) => boolean) => (props: {}) => {
  const next: any = {};
  for (const key in props) {
    if (test(key || "")) next[key] = props[key];
  }
  return next;
};

const getSystemStyledProps = getProps((regexp: string) => PRE.test(regexp));
export const reactPropsTypes = getProps((regexp: string) => !PRE.test(regexp));

export const systemStyledTypes = (props: ICSSProperty): string | null =>
  objToCssArray({ ...getSystemStyledProps(props) }).join("\n");
