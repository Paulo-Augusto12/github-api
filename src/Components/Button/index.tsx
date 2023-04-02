import {
  Button as ButtonMui,
  ButtonProps as ButtonPropsMui,
} from "@mui/material";

type ButtonProps = ButtonPropsMui;

export function Button({ ...props }: ButtonProps) {
  return <ButtonMui {...props} />;
}
