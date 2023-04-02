import React from "react";
import { Box } from "../Box";
import { Card } from "../Card";
import { useTheme } from "../../hook/useTheme";
import { Typography } from "../Typography";
import { Star } from "@phosphor-icons/react";
import { Link } from "@mui/material";

interface IRepositoryCardProps {
  name: string;
  link: string;
  stars: number;
  description: number;
  language: string;
  homepage: string;
}
export function RepositoryCard({
  name,
  link,
  stars,
  description,
  language,
  homepage,
}: IRepositoryCardProps) {
  const theme = useTheme();
  return (
    <Box sx={{ width: "80%" }}>
      <Card
        sx={{ backgroundColor: theme.colors.cardColor, borderRadius: "1rem" }}
      >
        <Box
          sx={{
            padding: "1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.9375rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: theme.colors.fontColor,
                fontSize: theme.fonts.large,
                fontWeight: theme.weigths.bold,
              }}
            >
              {name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.9375rem",
              }}
            >
              <Typography
                sx={{
                  color: theme.colors.fontColor,
                  fontSize: theme.fonts.large,
                  fontWeight: theme.weigths.medium,
                }}
              >
                {stars}
              </Typography>
              <Star size={38} color={theme.colors.fontColor} />
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "0.9375rem" }}
          >
            <Typography>
              <Link
                href={link}
                style={{
                  textDecoration: "none",
                  color: theme.colors.linkColor,
                }}
              >
                {link}
              </Link>
            </Typography>

            <Typography sx={{ color: theme.colors.fontColor }}>
              {description}
            </Typography>

            <Typography sx={{ color: theme.colors.fontColor }}>
              The main language of this repository is : <b>{language}</b>
            </Typography>

            <Typography
              sx={{
                color: theme.colors.fontColor,
                display: "flex",
                gap: "0.625rem",
              }}
            >
              This repository have a homepage. Check it out :
              <Link
                href={homepage}
                style={{
                  textDecoration: "none",
                  color: theme.colors.linkColor,
                }}
              >
                {homepage}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
