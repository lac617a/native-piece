import { ICSSProperty } from "./interfaces";

export interface PropType extends
  React.PropsWithChildren<Omit<ICSSProperty, "translate">> {}

export type Dict<T> = { [key: string]: T };
export type DOMProps = React.DOMAttributes<HTMLElement>;
