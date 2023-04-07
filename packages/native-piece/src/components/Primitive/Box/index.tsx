import React, { FC } from "react";
import { PropsType } from "../../../types";
import CreateStyled from "../../../core/createStyled";
import { reactPropsTypes } from "../../../utils/flatten";

export interface IBoxProps extends PropsType<any> { }

const Box: FC<IBoxProps> = (props) => {
  const As = CreateStyled<IBoxProps>(props.as || "div", props);
  return <As {...reactPropsTypes(props)} />;
};

export default Box; 