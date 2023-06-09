import React from "react";
import { Container } from "./Components/container";
import { useTheme } from "./hook/useTheme";
import { Typography } from "./Components/Typography";
import { Box } from "./Components/Box";
import { GithubLogo, MagnifyingGlass } from "@phosphor-icons/react";
import { TextField } from "./Components/TextInput";
import { Button } from "./Components/Button";
import { ProfileCard } from "./Components/ProfileCard";
import { RepositoryCard } from "./Components/RepositoryCard";
import { useHomePage } from "./hook/useHomePage";
import { NotFound } from "./Components/NotFound";

export function HomePage() {
  const theme = useTheme();
  const hook = useHomePage();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "9.6875rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "3.5625rem",
          height: hook.userRepos.length ? "" : "100vh",
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
            <GithubLogo size={48} color={theme.colors.fontColor} />
          </Box>
          {/* Search bar */}
          <Box sx={{ display: "flex", flexDirection: "row", gap: "0.9375rem" }}>
            <TextField
              value={hook.usernameInput}
              onChange={(e) => {
                hook.setUsernameInput(e.target.value);
              }}
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
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  await hook.handleGetuserData();
                }
              }}
            />
            <Button
              sx={{
                backgroundColor: theme.colors.searchBar,
                borderRadius: "16px",
                ":hover": {
                  backgroundColor: "#044162",
                },
              }}
              onClick={() => hook.handleGetuserData()}
            >
              <MagnifyingGlass size={32} />
            </Button>
          </Box>
        </Box>
        {/* ProfileCard Container */}
        {hook.error && (
          <Box>
            <NotFound />
          </Box>
        )}
        {hook.userFound !== undefined && (
          <ProfileCard
            profileImage={hook.userFound.profileImage}
            username={hook.userFound.name}
            profileLink={hook.userFound.githubLink}
            userDescription={hook.userFound.description}
            followers={hook.userFound.followers}
            following={hook.userFound.following}
            repos={hook.userFound.repos}
          />
        )}
        {hook.userRepos.map((repo) => (
          <RepositoryCard
            description={repo.description}
            name={repo.name}
            homepage={repo.homepageLink}
            language={repo.language}
            link={repo.link}
            stars={repo.stars}
          />
        ))}
      </Box>
    </Container>
  );
}
