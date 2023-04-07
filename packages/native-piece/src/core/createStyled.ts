import { CSSProperties } from "react";
import * as styledSystem from "styled-system";
import emStyled, { CSSObject } from "@emotion/styled";
import { createShouldForwardProp, props } from "@styled-system/should-forward-prop";

import { KeyofJSXType } from "../types";
import { ICSSProperty } from "../interfaces";
import { systemStyledTypes } from "../utils/flatten";

const shouldForwardProp = createShouldForwardProp([
  ...props,
  "gap",
  "textDecoration",
]);


function Styled<P = object>(tags: KeyofJSXType, props: P, css?: ICSSProperty) {
  const CSSConvert = systemStyledTypes(props as CSSProperties);

  return emStyled(tags, { shouldForwardProp })`
    ${CSSConvert}
    ${css as CSSObject}
    ${styledSystem.compose(
    styledSystem.grid,
    styledSystem.size,
    styledSystem.space,
    styledSystem.color,
    styledSystem.shadow,
    styledSystem.layout,
    styledSystem.border,
    styledSystem.borders,
    styledSystem.flexbox,
    styledSystem.position,
    styledSystem.background,
    styledSystem.typography,
    styledSystem.borderRadius,
  )}
    ${(props as any).pseudos}
  ` as React.ComponentType<Exclude<React.HTMLAttributes<HTMLDivElement>, keyof P> & P>;
}

const CreateStyled = Styled;
export default CreateStyled;
