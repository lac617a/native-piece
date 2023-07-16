import emStyled, { StyledComponent } from "@emotion/styled";
import { ICSSProperty } from "../../interfaces";
import { config, options } from "../../core/config";

const Button = emStyled<"button">("button", options)<ICSSProperty>`
  cursor: pointer;
  border: none;
  outline: none;
  overflow: hidden;
  position: relative;
  ${config}
`;

export default Button as StyledComponent<{} & ICSSProperty, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;