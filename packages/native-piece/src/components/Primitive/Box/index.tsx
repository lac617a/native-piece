import React, { FC } from "react";
import { PropsType } from "../../../types";
import CreateStyled from "../../../core/createStyled";
import { reactPropsTypes } from "../../../utils/flatten";

export interface IBox extends PropsType { }

const Box: FC<IBox> = (props) => {
  const As = CreateStyled<IBox>(props.as || "div", props);
  return <As {...reactPropsTypes(props)} />;
};

export default Box;