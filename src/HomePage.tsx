import React from "react";
import { Container } from "./Components/container";
import { useTheme } from "./hook/useTheme";
import { Typography } from "./Components/Typography";
import { Box } from "./Components/Box";
import { GithubLogo } from "@phosphor-icons/react";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "30%",
          }}
        >
          <Typography
            sx={{
              color: theme.colors.fontColor,
              fontWeight: theme.weigths.bold,
              fontSize: theme.fonts.large,
            }}
          >
            Github API App
          </Typography>
          <GithubLogo size={32} color={theme.colors.fontColor} />
        </Box>
      </Box>
    </Container>
  );
}
