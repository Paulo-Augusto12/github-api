import React, { useEffect, useState } from "react";
import { IUserDTO } from "../api/DTO/userDTO";
import { IUser } from "../api/InterfaceMapper/IUser";
import { GetUserdata } from "../api/getUserData";

export function useHomePage() {
  const [userFound, setUserFound] = useState<IUser>();
  const [usernameInput, setUsernameInput] = useState("");

  function userDTOToUserState(DTO: IUserDTO): IUser {
    return {
      profileImage: DTO.avatar_url,
      name: DTO.name,
      githubLink: DTO.html_url,
      description: DTO.bio,
      followers: DTO.followers,
      following: DTO.following,
      repos: DTO.public_repos,
    };
  }

  async function handleGetuserData() {
    const response = await GetUserdata(usernameInput);

    const data = userDTOToUserState(response);

    setUserFound(data);

    setUsernameInput("");
  }

  return {
    userFound,
    usernameInput,
    setUsernameInput,
    handleGetuserData,
  };
}
