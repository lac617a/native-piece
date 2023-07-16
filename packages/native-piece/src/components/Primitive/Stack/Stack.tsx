import emStyled, { StyledComponent } from "@emotion/styled";
import { config, options } from "../../../core/config";
import { ICSSProperty } from "../../../interfaces";

const Stack = emStyled<"div">("div", options)<ICSSProperty>`
  display: flex;
  ${config}
`;

export default Stack as StyledComponent<{
  as?: React.ElementType<any> | undefined;
} & ICSSProperty, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;