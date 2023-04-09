import React, { FC } from "react";
import Box from "../Box";
import { PropsType } from "../../../types";

export interface IStackProps extends PropsType<HTMLDivElement> { }

const Stack: FC<IStackProps> = (props) => <Box display="flex" {...props} />;

export default Stack;