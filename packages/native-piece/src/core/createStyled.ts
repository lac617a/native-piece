import * as styledSystem from "styled-system";
import emStyled, { CSSObject } from "@emotion/styled";
import { createShouldForwardProp, props } from "@styled-system/should-forward-prop";

import { ICSSProperty } from "../interfaces";
import { systemStyledTypes } from "../utils/flatten";

const shouldForwardProp = createShouldForwardProp([
  ...props,
  "gap",
  "cursor",
  "textDecoration",
]);


function Styled<P = object, T extends keyof JSX.IntrinsicElements = 'div'>(tags: T, props: P, css?: ICSSProperty) {
  console.log({props});
  const CSSConvert = systemStyledTypes(props as ICSSProperty);

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
    styledSystem.buttonStyle,
    styledSystem.borderRadius,
  )}
    ${(props as any).pseudos}
  ` as React.ComponentType<Exclude<JSX.IntrinsicElements[T], keyof P> & P>;
}

const CreateStyled = Styled;
export default CreateStyled;

// as React.ComponentType<Exclude<React.HTMLAttributes<HTMLDivElement>, keyof P> & P>