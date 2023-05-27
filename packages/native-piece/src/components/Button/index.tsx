import React from "react";
import { PropsType } from "../../types";
import CreateStyled from "../../core/createStyled";
import { reactPropsTypes } from "../../utils/flatten";

export interface IButtonProps extends PropsType<HTMLButtonElement> { }

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((inProps, ref) => {
  const ButtonRoot = CreateStyled<IButtonProps, 'button'>('button', inProps);
  return <ButtonRoot
    ref={ref}
    {...reactPropsTypes(inProps)}
  />;
});

export default Button;
