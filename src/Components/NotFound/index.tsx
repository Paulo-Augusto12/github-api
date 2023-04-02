import React from "react";
import { Box } from "../Box";
import { Typography } from "../Typography";
import { useTheme } from "../../hook/useTheme";
import { LinkBreak } from "@phosphor-icons/react";

export function NotFound() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3.5625rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{ color: theme.colors.fontColor, fontWeight: theme.weigths.bold }}
      >
        User not found !
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: theme.colors.fontColor, fontWeight: theme.weigths.medium }}
      >
        Try make another search. This user may not exist or his username haven’t
        been typed correctly
      </Typography>
      <LinkBreak size={64} color={theme.colors.fontColor} />
    </Box>
  );
}
