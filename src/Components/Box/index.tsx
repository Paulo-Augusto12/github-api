import { Box as BoxMui, BoxProps as BoxPropsMui } from "@mui/material";

type BoxProps = BoxPropsMui;

export function Box({ ...props }: BoxProps) {
  return <BoxMui {...props} />;
}
