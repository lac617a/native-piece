import emStyled, { StyledComponent } from "@emotion/styled";
import { PropsType } from "../../types";
import { config, shouldForwardProp } from "../../core/config";

export interface ILinkProps extends Omit<PropsType<"a">, "as"> {
  as?: "a" | "link";
}

const Link = emStyled<"a">("a", {
  label: "native-piece",
  shouldForwardProp
})<ILinkProps>`${config}`;

export default Link as StyledComponent<{
  as?: React.ElementType<any> | undefined;
} & ILinkProps, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
