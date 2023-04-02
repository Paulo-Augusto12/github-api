import React from "react";
import { Box } from "../Box";
import { Card } from "../Card";
import { useTheme } from "../../hook/useTheme";
import { Typography } from "../Typography";
import { Star } from "@phosphor-icons/react";
import { Link } from "@mui/material";

export function RepositoryCard() {
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
              Alura Studies
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
                2
              </Typography>
              <Star size={38} color={theme.colors.fontColor} />
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "0.9375rem" }}
          >
            <Typography>
              <Link
                href="https://github.com/Paulo-Augusto12/Alura-Studies"
                style={{
                  textDecoration: "none",
                  color: theme.colors.linkColor,
                }}
              >
                https://github.com/Paulo-Augusto12/Alura-Studies
              </Link>
            </Typography>

            <Typography sx={{ color: theme.colors.fontColor }}>
              Aplicação web desenvolvida utilizando react. A aplicação possui
              duas funcionalidades, gerar tarefas aleatórias para o usuário, ou
              gerar tarefas baseadas em um escopo de opções cedidas pela Api,
              com a escolha do escopo desejado sendo escolhida pelo usuário
            </Typography>

            <Typography sx={{ color: theme.colors.fontColor }}>
              The main language of this repository is : <b>Typescript</b>
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
                href="This repository have a homepage. Check it out : https://anti-boredom-app.vercel.app/"
                style={{
                  textDecoration: "none",
                  color: theme.colors.linkColor,
                }}
              >
                https://anti-boredom-app.vercel.app/
              </Link>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
