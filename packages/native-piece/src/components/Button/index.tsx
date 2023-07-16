import emStyled, { StyledComponent } from "@emotion/styled";
import { ICSSProperty } from "../../interfaces";
import { config, shouldForwardProp } from "../../core/config";

const Button = emStyled<"button">("button", {
  label: "native-piece",
  shouldForwardProp
})<ICSSProperty>`
  cursor: pointer;
  border: none;
  outline: none;
  overflow: hidden;
  position: relative;
  ${config}
`;

export default Button as StyledComponent<{} & ICSSProperty, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;