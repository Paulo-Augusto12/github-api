import {
  Typography as TypographyMui,
  TypographyProps as TypographyPropsMui,
} from "@mui/material";

type TypographyProps = TypographyPropsMui;

export function Typography({ ...props }: TypographyProps) {
  return <TypographyMui {...props} />;
}
