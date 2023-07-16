import emStyled, { StyledComponent } from "@emotion/styled";
import { PropsType, KeyofJSXType } from "../../../types";
import { config, options } from "../../../core/config";

const Box = emStyled<"div">("div", options)<PropsType<"div">>`${config}`;

export default Box as StyledComponent<{
  as?: KeyofJSXType;
} & PropsType<"div">, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
