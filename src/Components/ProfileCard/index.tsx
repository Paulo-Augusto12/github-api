import { Link } from "@mui/material";
import { useTheme } from "../../hook/useTheme";
import { Box } from "../Box";
import { Card } from "../Card";
import { Typography } from "../Typography";

interface IProfileCardProps {
  profileImage: string;
  username: string;
  profileLink: string;
  userDescription: string;
  followers: number;
  following: number;
  repos: number;
}
export function ProfileCard({
  followers,
  following,
  profileImage,
  profileLink,
  repos,
  userDescription,
  username,
}: IProfileCardProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        gap: "3.5625rem",
      }}
    >
      <Card
        sx={{ backgroundColor: theme.colors.cardColor, borderRadius: "1rem" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "1.75rem",
            gap: "2.25rem",
          }}
        >
          <Box>
            <img
              src={profileImage}
              width={162}
              height={170}
              style={{ borderRadius: 215 }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.colors.fontColor,
                fontWeight: theme.weigths.bold,
              }}
            >
              {username}
            </Typography>
            <Typography sx={{ color: theme.colors.linkColor }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: theme.colors.linkColor,
                }}
                href={profileLink}
                target="blank"
              >
                {profileLink}
              </Link>
            </Typography>
            <Typography
              sx={{
                fontWeight: theme.weigths.medium,
                color: theme.colors.fontColor,
              }}
            >
              {userDescription}
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
                {followers} Followers
              </Typography>
              <Typography
                sx={{
                  color: theme.colors.fontColor,
                  fontWeight: theme.weigths.medium,
                }}
              >
                {following} Following
              </Typography>
              <Typography
                sx={{
                  color: theme.colors.fontColor,
                  fontWeight: theme.weigths.medium,
                }}
              >
                {repos} Repos
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
      <Box>
        <Typography
          sx={{
            color: theme.colors.fontColor,
            fontWeight: theme.weigths.bold,
          }}
          variant="h5"
        >
          Check out some projects developed by this user
        </Typography>
      </Box>
    </Box>
  );
}
