import React, { FC } from "react";
import { PropType } from "../../../types";
import CreateStyled from "../../../core/createStyled";
import { reactPropsTypes } from "../../../utils/flatten";

export interface IBox extends PropType { }

const Box: FC<IBox> = (props) => {
  const Component = CreateStyled(props.as || "div", props, {});
  return <Component {...reactPropsTypes(props)} />;
};

export default Box;