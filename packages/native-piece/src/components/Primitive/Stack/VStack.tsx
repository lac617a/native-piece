import emStyled, { StyledComponent } from "@emotion/styled";
import { config, options } from "../../../core/config";
import { ICSSProperty } from "../../../interfaces";

const VStack = emStyled<"div">("div", options)<ICSSProperty>`
  display: flex;
  flex-direction: column;
  ${config}
`;

export default VStack as StyledComponent<{
  as?: React.ElementType<any> | undefined;
} & ICSSProperty, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;