import styled, { CSSObject } from "@emotion/styled";
import { space, color, layout, padding } from "styled-system";
import { ICSSProperty } from "interfaces";
// import shouldForwardProp from "@styled-system/should-forward-prop";

const CreateStyled = <
  P extends object
>(
    tag: keyof JSX.IntrinsicElements,
    css?: ICSSProperty,
    mediaQuery?: string
  ) => {
  return styled(tag)<P>`
    ${css as CSSObject}
    ${mediaQuery}
    ${layout}
    ${space}
    ${color}
    ${padding}
  `;
};

export default CreateStyled;
