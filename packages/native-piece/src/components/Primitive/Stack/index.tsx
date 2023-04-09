import { PropsType } from "../../../types";

export interface IStackProps extends
  Omit<PropsType<HTMLDivElement>, "display"> { }
export interface IVStackProps extends
  Omit<IStackProps, "flexDirection" | "msFlexDirection"> { }
