import emStyled, { StyledComponent } from "@emotion/styled";
import { PropsType, KeyofJSXType } from "../../../types";
import { config, shouldForwardProp } from "../../../core/config";

const Box = emStyled<"div">("div", {
  label: "native-piece",
  shouldForwardProp
})<PropsType<"div">>`${config}`;

export default Box as StyledComponent<{
  as?: KeyofJSXType;
} & PropsType<"div">, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
