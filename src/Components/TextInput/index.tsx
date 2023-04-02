import {
  TextField as TextFieldMui,
  TextFieldProps as TextFieldPropsMui,
} from "@mui/material";

type TextFieldProps = TextFieldPropsMui;

export function TextField({ ...props }: TextFieldProps) {
  return <TextFieldMui {...props} />;
}
