import { CSSProperties } from "react";

import * as styledSystem from "styled-system";
import { ICSSProperty, KeyofJSXType } from "../interfaces";
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled, { CSSObject } from "@emotion/styled";
import { systemStyledTypes } from "../utils/flatten";

// function styled(tag: KeyofJSXType, options: StyledOptions) {
//   const stylesFactory = emStyled(tag, options);

//   if (process.env.NODE_ENV !== "production") {
//     return (...styles: any[]) => {
//       const component = typeof tag === "string" ? `"${tag}"` : "component";
//       if (styles.length === 0) {
//         console.error(
//           [
//             `native-piece: Seems like you called \`styled(${component})()\` without a \`style\` argument.`,
//             "You must provide a `styles` argument: `styled(\"div\")(styleYouForgotToPass)`.",
//           ].join("\n")
//         );
//       } else if (styles.some((style) => style === undefined)) {
//         console.error(
//           `native-piece: the styled(${component})(...args) API requires all its args to be defined.`
//         );
//       }
//       return stylesFactory(...styles);
//     };
//   }

//   return stylesFactory;
// }

function Styled<P = object>(tags: KeyofJSXType, props: P, css?: ICSSProperty) {
  const CSSConvert = systemStyledTypes(props as CSSProperties);

  return styled(tags, { shouldForwardProp })`
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
    ${(props as any).pseudos}
  `;
}

const CreateStyled = Styled;
export default CreateStyled;
