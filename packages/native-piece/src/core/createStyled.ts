import { CSSProperties } from "react";
import * as styledSystem from "styled-system";
import emStyled, { CSSObject, StyledOptions } from "@emotion/styled";
import { createShouldForwardProp, props } from "@styled-system/should-forward-prop";

import { KeyofJSXType } from "../types";
import { ICSSProperty } from "../interfaces";
import { systemStyledTypes } from "../utils/flatten";

function styledNative(tag: KeyofJSXType, options: StyledOptions) {
  const stylesFactory = emStyled(tag, options);

  if (process.env.NODE_ENV !== "production") {
    return (...styles: any[]) => {
      const component = typeof tag === "string" ? `"${tag}"` : "component";
      if (styles.length === 0) {
        console.error(
          [
            `native-piece: Seems like you called \`styled(${component})()\` without a \`style\` argument.`,
            "You must provide a `styles` argument: `styled(\"div\")(styleYouForgotToPass)`.",
          ].join("\n")
        );
      } else if (styles.some((style) => style === undefined)) {
        console.error(
          `native-piece: the styled(${component})(...args) API requires all its args to be defined.`
        );
      }
      return stylesFactory(...styles);
    };
  }

  return stylesFactory;
}

const shouldForwardProp = createShouldForwardProp([
  ...props,
  "textDecoration",
]);


function Styled<P = object>(tags: KeyofJSXType, props: P, css?: ICSSProperty) {
  const CSSConvert = systemStyledTypes(props as CSSProperties);

  return styledNative(tags, { shouldForwardProp })`
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
