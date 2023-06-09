import axios from "axios";
export async function GetUserdata(username: string) {
  try {
    const baseUrl = `https://api.github.com/users/${username}`;

    const response = await axios.get(baseUrl);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
