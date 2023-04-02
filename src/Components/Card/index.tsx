import { Card as CardMui, CardProps as CardPropsMui } from "@mui/material";

type CardProps = CardPropsMui;

export function Card({ ...props }: CardProps) {
  return <CardMui {...props} />;
}
