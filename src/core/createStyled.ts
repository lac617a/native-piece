import { CSSProperties } from "react";
import shouldForwardProp from "@styled-system/should-forward-prop";

import * as styledSystem from "styled-system";
import styled, { CSSObject } from "@emotion/styled";

import { systemStyledTypes } from "../utils/flatten";
import { ICSSProperty, KeyofJSXType } from "../interfaces";

function Styled<T>(
  tag: KeyofJSXType,
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
    ${styledSystem.border}
    ${styledSystem.borders}
    ${styledSystem.flexbox}
    ${styledSystem.position}
    ${styledSystem.background}
    ${styledSystem.typography}
    ${styledSystem.borderRadius}
    ${(props as any ).pseudos}
  `;
}

const CreateStyled = Styled;
export default CreateStyled;
