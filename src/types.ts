import { ICSSProperty } from "./interfaces";

export interface PropsType extends ICSSProperty {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

export type Dict<T> = { [key: string]: T };
export type DOMProps = React.DOMAttributes<HTMLElement>;
