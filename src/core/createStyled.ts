import { CSSProperties } from "react";
import shouldForwardProp from "@styled-system/should-forward-prop";

import * as styledSystem from "styled-system";
import styled, { CSSObject } from "@emotion/styled";

import { ICSSProperty } from "../interfaces";
import { systemStyledTypes } from "../utils/flatten";

function Styled<T>(
  tag: keyof JSX.IntrinsicElements,
  props: T,
  css?: ICSSProperty
) {
  const CSSConvert = systemStyledTypes(props as CSSProperties);

  return styled(tag, {shouldForwardProp})`
    ${CSSConvert}
    ${css as CSSObject}
    ${styledSystem.grid}
    ${styledSystem.size}
    ${styledSystem.space}
    ${styledSystem.color}
    ${styledSystem.shadow}
    ${styledSystem.layout}
    ${styledSystem.borders}
    ${styledSystem.flexbox}
    ${styledSystem.typography}
    ${styledSystem.borderRadius}
    ${(props as any ).pseudos}
  `;
}

const CreateStyled = Styled;
export default CreateStyled;
