import { Link } from "@mui/material";
import { useTheme } from "../../hook/useTheme";
import { Box } from "../Box";
import { Card } from "../Card";
import { Typography } from "../Typography";

export function ProfileCard() {
  const theme = useTheme();
  return (
    <Box sx={{ width: "80%" }}>
      <Card
        sx={{ backgroundColor: theme.colors.cardColor, borderRadius: "1rem" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "0.75rem",
            gap: "2.25rem",
          }}
        >
          <Box>
            <img
              src="https://avatars.githubusercontent.com/u/102987686?v=4"
              width={162}
              height={170}
              style={{ borderRadius: 215 }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <Typography
              variant="h4"
              sx={{
                color: theme.colors.fontColor,
                fontWeight: theme.weigths.bold,
              }}
            >
              Paulo-Augusto12
            </Typography>
            <Typography sx={{ color: theme.colors.linkColor }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: theme.colors.linkColor,
                }}
                href="https://github.com/Paulo-Augusto12"
                target="blank"
              >
                https://github.com/Paulo-Augusto12
              </Link>
            </Typography>
            <Typography
              sx={{
                fontWeight: theme.weigths.medium,
                color: theme.colors.fontColor,
              }}
            >
              Um programador iniciante, procurando aprender tudo o que for
              possível aos poucos.
            </Typography>
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
                  fontWeight: theme.weigths.medium,
                }}
              >
                1 Followers
              </Typography>
              <Typography
                sx={{
                  color: theme.colors.fontColor,
                  fontWeight: theme.weigths.medium,
                }}
              >
                1 Following
              </Typography>
              <Typography
                sx={{
                  color: theme.colors.fontColor,
                  fontWeight: theme.weigths.medium,
                }}
              >
                30 Repos
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
