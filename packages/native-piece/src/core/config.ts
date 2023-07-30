import * as styledSystem from "styled-system";
import {
  createShouldForwardProp,
  props as shouldForwardPro,
} from "@styled-system/should-forward-prop";
import { objSelectorsToCssArray, systemStyledTypes } from "../utils/flatten";

const LABEL = "native-piece";
const shouldForwardProp = createShouldForwardProp([
  ...shouldForwardPro,
]);

const options = {
  label: LABEL,
  shouldForwardProp,
};

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
  ${objSelectorsToCssArray(props.selectors)}
  ${objSelectorsToCssArray(props.sx)}
`;

export { config, options };
