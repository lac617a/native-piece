import * as styledSystem from "styled-system";
import {
  createShouldForwardProp,
  props as shouldForwardPro,
} from "@styled-system/should-forward-prop";
import { objPseudoToCssArray, systemStyledTypes } from "../utils/flatten";

const shouldForwardProp = createShouldForwardProp([
  ...shouldForwardPro,
  "gap",
  "cursor",
  "transition",
  "willChange",
  "textDecoration",
]);

const config = (props?: any) => `
  ${systemStyledTypes(props)}
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
  ${objPseudoToCssArray(props.pseudos)}
`;

export { config, shouldForwardProp };
