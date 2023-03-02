import React, { FC } from "react";
import CreateStyled from "../../../core/createStyled";
import { getPropTypes } from "../../../utils/flatten";
import { PropType } from "../../../types";

export interface IBox extends PropType { }

const Box: FC<IBox> = (props) => {
  const mediaQuery = getPropTypes(props);
  const Component = CreateStyled<IBox>(props.as ?? "div", {}, mediaQuery);

  return <Component {...props} />;
};

export default Box;