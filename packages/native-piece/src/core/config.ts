import * as styledSystem from "styled-system";
import {
  props,
  createShouldForwardProp,
} from "@styled-system/should-forward-prop";
import { systemStyledTypes } from "../utils/flatten";

const shouldForwardProp = createShouldForwardProp([
  ...props,
  "gap",
  "cursor",
  "transition",
  "willChange",
  "textDecoration",
]);

const config = (props) => `
  ${systemStyledTypes(props as any)}
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
    styledSystem.borderRadius
  )}
  ${(props as any).pseudos}
`;

export {
  config,
  shouldForwardProp
}