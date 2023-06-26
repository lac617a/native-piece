import React from "react";
import { PropsType } from "../../types";
import CreateStyled from "../../core/createStyled";
import { reactPropsTypes } from "../../utils/flatten";

export interface IButtonProps extends PropsType<"button"> {}

const buttonStyled: IButtonProps = {
  cursor: "pointer",
  overflow: "hidden",
  outline: "none",
  border: "none",
  position: "relative",
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((inProps, ref) => {
  const ButtonRoot = CreateStyled<IButtonProps, 'button'>(
    'button',
    inProps,
    buttonStyled
  );

  return (
    <ButtonRoot
      ref={ref}
      {...reactPropsTypes(inProps)}
    />
  );
});

export default Button;