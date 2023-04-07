// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js

import { isUnitlessNumber } from "./CSSProperty";

export default function addUnitIfNeeded(name: string, value: any) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  if (value == null || typeof value === "boolean" || value === "") {
    return "";
  }

  if (
    typeof value === "number" &&
    value !== 0 &&
    // eslint-disable-next-line no-prototype-builtins
    !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
  ) {
    return `${value}px`; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}
