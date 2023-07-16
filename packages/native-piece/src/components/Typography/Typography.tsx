import emStyled, { StyledComponent } from "@emotion/styled";
import { KeyofJSXTypography, TypographyStyleOnly } from "../../types";
import { config, options } from "../../core/config";
export interface ITypographyProps extends TypographyStyleOnly {
  /**
   * The component maps the as prop to a range of different HTML element types.
   * For instance, span to `<span>`.
   * If you wish to change that mapping, you can provide your own.
   * @default {
   *   p: 'p',
   *   dl: 'dl',
   *   kbd: 'kbd',
   *   pre: 'pre',
   *   span: 'span',
   *   code: 'code',
   *   mark: 'mark',
   *   abbr: 'habbr',
   *   small: 'small',
   *   blockquote: 'blockquote',
   * }
   * 
   * @default 'p'
   */
  as?: KeyofJSXTypography;
}

const Typography = emStyled<"p">("p", options)<ITypographyProps>`${config}`;

export default Typography as StyledComponent<{
  as?: React.ElementType<any> | undefined;
} & ITypographyProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
