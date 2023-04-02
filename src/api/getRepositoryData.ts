import axios from "axios";

export async function GetRepositoryData(reposLink: string) {
  const response = await axios.get(reposLink);

  return response.data;
}
