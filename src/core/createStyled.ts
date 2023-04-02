import { CSSProperties } from "react";

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

  return styled(tag)`
    ${CSSConvert}
    ${css as CSSObject}
    ${styledSystem.grid}
    ${styledSystem.space}
    ${styledSystem.colorStyle}
    ${styledSystem.shadow}
    ${styledSystem.layout}
    ${styledSystem.flexbox}
    ${styledSystem.fontSize}
    ${styledSystem.fontFamily}
    ${styledSystem.fontWeight}
    ${(props as any ).pseudos}
  `;
}

const CreateStyled = Styled;
export default CreateStyled;
