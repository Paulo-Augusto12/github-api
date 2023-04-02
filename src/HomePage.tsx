import React from "react";
import { Container } from "./Components/container";
import { useTheme } from "./hook/useTheme";
import { Typography } from "./Components/Typography";

export function HomePage() {
  const theme = useTheme();
  return (
    <Container>
      <Typography sx={{ color: theme.colors.fontColor }}>
        Hello world
      </Typography>
    </Container>
  );
}
