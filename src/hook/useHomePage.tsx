import React, { useEffect, useState } from "react";
import { IUserDTO } from "../api/DTO/userDTO";
import { IUser } from "../api/InterfaceMapper/IUser";
import { GetUserdata } from "../api/getUserData";
import { IRepo } from "../api/InterfaceMapper/IRepo";
import { IRepoDTO } from "../api/DTO/repoDTO";
import { GetRepositoryData } from "../api/getRepositoryData";

export function useHomePage() {
  const [userFound, setUserFound] = useState<IUser>();
  const [userRepos, setUserRepos] = useState<IRepo[]>([]);
  const [usernameInput, setUsernameInput] = useState("");
  const [error, setError] = useState(false);

  function userDTOToUserState(DTO: IUserDTO): IUser {
    return {
      profileImage: DTO.avatar_url,
      name: DTO.name,
      githubLink: DTO.html_url,
      description: DTO.bio,
      followers: DTO.followers,
      following: DTO.following,
      repos: DTO.public_repos,
      reposLink: DTO.repos_url,
    };
  }

  function RepoDTOtoRepoState(DTO: IRepoDTO[]): IRepo[] {
    return DTO.map((repo) => {
      return {
        description: repo.description,
        name: repo.name,
        homepageLink: repo.homepage,
        stars: repo.stargazers_count,
        language: repo.language,
        link: repo.html_url,
      };
    });
  }

  async function handleGetuserData() {
    setUserFound(undefined);
    setUserRepos([]);

    const response = await GetUserdata(usernameInput);
    if (response) {
      const data = userDTOToUserState(response);
      setUserFound(data);
      setUsernameInput("");
      setError(false);
    } else {
      setError(true);
    }
  }

  async function handleGetUserReposData() {
    if (userFound) {
      const response = await GetRepositoryData(userFound.reposLink);

      const data = RepoDTOtoRepoState(response);

      setUserRepos(data);
    }
  }

  useEffect(() => {
    handleGetUserReposData();
  }, [userFound]);

  return {
    userFound,
    usernameInput,
    setUsernameInput,
    handleGetuserData,
    userRepos,
    error,
  };
}
