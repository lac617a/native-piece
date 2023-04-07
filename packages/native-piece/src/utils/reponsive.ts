import { size } from "../interfaces";

type SetMediaQueryType = {
  id: number;
  media: string;
};

export function getMediaExact(type: "min" | "max" = "max") {
  const MEDIAQUERY: any = {
    sm: `(${type}-width: ${type === "min" ? size.sm - 1 : size.sm}px)`,
    md: `(${type}-width: ${type === "min" ? size.md - 1 : size.md}px)`,
    lg: `(${type}-width: ${type === "min" ? size.lg - 1 : size.lg}px)`,
    xl: `(${type}-width: ${type === "min" ? size.xl - 1 : size.xl}px)`,
    xxl: `(${type}-width: ${type === "min" ? size.xxl - 1 : size.xxl}px)`,
  };

  return MEDIAQUERY;
}

export const findTypeMediaQuery = (media: string) => {
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

export const recordMediaQuery = (rules: string[]): string[] => {
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