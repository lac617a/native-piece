import emStyled, { StyledComponent } from "@emotion/styled";
import { TypographyStyleOnly } from "../../types";
import { config, shouldForwardProp } from "../../core/config";
export interface IHeadingProps extends TypographyStyleOnly {
  /**
   * The component maps the as prop to a range of different HTML element types.
   * For instance, h2 to `<h2>`.
   * If you wish to change that mapping, you can provide your own.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   * }
   * @default 'h2'
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5"
}

const Heading = emStyled<"h2">("h2", {
  label: "native-piece",
  shouldForwardProp
})<IHeadingProps>`${config}`;

export default Heading as StyledComponent<{
  as?: React.ElementType<any> | undefined;
} & IHeadingProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;