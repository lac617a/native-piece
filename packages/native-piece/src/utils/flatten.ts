/* eslint-disable no-prototype-builtins */
import { CSSProperties } from "react";

import { Dict } from "../types";
import { size } from "../interfaces";
import { ALLPROPERTY } from "./domStyled";
import isPlainObject from "./isPlainObject";
import hyphenate from "./hyphenateStyleName";
import addUnitIfNeeded from "./addUnitlfNeeded";

const propertyInclude = (property: string): boolean => {
  const PROPERTY = ALLPROPERTY.some(
    (value) => humanize(value) === humanize(property)
  );
  return PROPERTY;
};

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

function getMediaExact(type: "min" | "max" = "max") {
  const MEDIAQUERY: any = {
    sm: `(${type}-width: ${type === "min" ? size.sm - 1 : size.sm}px)`,
    md: `(${type}-width: ${type === "min" ? size.md - 1 : size.md}px)`,
    lg: `(${type}-width: ${type === "min" ? size.lg - 1 : size.lg}px)`,
    xl: `(${type}-width: ${type === "min" ? size.xl - 1 : size.xl}px)`,
    xxl: `(${type}-width: ${type === "min" ? size.xxl - 1 : size.xxl}px)`,
  };

  return MEDIAQUERY;
}

const findTypeMediaQuery = (media: string) => {
  const mediaToLowerCase = media.toLowerCase();
  const isMediaMin = mediaToLowerCase.includes("min");
  const mediaOnly = isMediaMin ? "min" : "max";
  const exactMedia = isMediaMin
    ? mediaToLowerCase.substring(8)
    : mediaToLowerCase.substring(5);

  return {
    mediaOnly: mediaOnly as "max" | "min",
    exactMedia,
  };
};

/**
 * It's falsish not falsy because 0 is allowed.
 */
const isFalsish = (chunk: any): chunk is undefined | null | false | "" =>
  chunk === undefined || chunk === null || chunk === false || chunk === "";

const objToCssArray = (obj: Dict<any>, prevKey?: string): string[] => {
  const rules: string[] = [];
  for (const key in obj) {
    if (!obj.hasOwnProperty(key) || isFalsish(obj[key])) continue;
    else {
      if (propertyInclude(key)) {
        rules.push(`${hyphenate(key)}: ${addUnitIfNeeded(key, obj[key])};`);
      }
      if (Array.isArray(obj[key]) && obj[key].isCss && propertyInclude(key)) {
        rules.push(`${hyphenate(key)}:`, obj[key], ";");
      } else if (isPlainObject(obj[key]) && propertyInclude(key)) {
        rules.push(...objToCssArray(obj[key], key));
      } else if (key.startsWith("media")) {
        const { mediaOnly, exactMedia } = findTypeMediaQuery(key);
        const mediaQuery = getMediaExact(mediaOnly)[exactMedia];
        rules.push(
          `@media only screen and ${mediaQuery} {${objToCssArray(obj[key])}}`
        );
      }
    }
  }

  const newRules = new Set([...recordMediaQuery(rules), ...rules]);
  return prevKey ? [`${prevKey} {`, ...rules, "}"] : [...newRules];
};

function humanize(str: string) {
  let i = 0;
  const frags = str.split("-");
  for (i; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join("").charAt(0).toLowerCase() + frags.join("").substring(1);
}

type SetMediaQueryType = {
  id: number;
  media: string;
};

const setMediaQuery = (
  item: string,
  type: "max" | "min"
): SetMediaQueryType[] => {
  const mediaQuery: SetMediaQueryType[] = [];
  Object.values(size).forEach((value) => {
    if (typeof value === "number") {
      const search = item.search(
        (type === "max" ? value : value - 1).toString()
      );
      if (search !== -1) {
        mediaQuery.push({ id: value, media: item });
      }
    }
  });
  return mediaQuery;
};

const recordMediaQuery = (rules: string[]): string[] => {
  const media: SetMediaQueryType[] = [];
  const mediaMin: SetMediaQueryType[] = [];

  rules.forEach((item) => {
    if (item.includes("min-width")) {
      mediaMin.push(...setMediaQuery(item, "min"));
    } else if (item.includes("max-width")) {
      media.push(...setMediaQuery(item, "max"));
    }
  });

  media.sort((a, b) => b.id - a.id);
  mediaMin.sort((a, b) => a.id - b.id);
  return [
    ...media.map((item) => item.media),
    ...mediaMin.map((item) => item.media),
  ];
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
