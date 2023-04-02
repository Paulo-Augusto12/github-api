import React from "react";
import { Container } from "./Components/container";
import { useTheme } from "./hook/useTheme";
import { Typography } from "./Components/Typography";
import { Box } from "./Components/Box";
import { GithubLogo, MagnifyingGlass } from "@phosphor-icons/react";
import { TextField } from "./Components/TextInput";
import { Button } from "./Components/Button";

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
        {/* App Header Container */}
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "2.25rem",
          }}
        >
          {/* App title */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
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
          {/* Search bar */}
          <Box sx={{ display: "flex", flexDirection: "row", gap: "0.9375rem" }}>
            <TextField
              sx={{
                width: "100%",
                backgroundColor: theme.colors.searchBar,
                borderRadius: "16px",
                input: {
                  color: theme.colors.fontColor,
                  backgroundColor: theme.colors.searchBar,
                  borderRadius: "16px",
                },
                "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "16px",
                },
              }}
              placeholder="Search for a Github user"
            />
            <Button
              sx={{
                backgroundColor: theme.colors.searchBar,
                borderRadius: "16px",
                ":hover": {
                  backgroundColor: "#044162",
                },
              }}
            >
              <MagnifyingGlass size={32} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
