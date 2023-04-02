import React from "react";
import { Container } from "./Components/container";
import { useTheme } from "./hook/useTheme";
import { Typography } from "./Components/Typography";
import { Box } from "./Components/Box";

export function HomePage() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "9.6875rem",
        }}
      >
        <Typography
          sx={{
            color: theme.colors.fontColor,
            fontWeight: theme.weigths.bold,
            fontSize: theme.fonts.large,
          }}
        >
          Hello world
        </Typography>
      </Box>
    </Container>
  );
}
