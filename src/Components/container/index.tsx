import {
  Container as ContainerMui,
  ContainerProps as ContainerPropsMui,
} from "@mui/material";

type ContainerProps = ContainerPropsMui;

export function Container({ ...props }: ContainerProps) {
  return <ContainerMui {...props} />;
}
