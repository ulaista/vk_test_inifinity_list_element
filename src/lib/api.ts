import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/repositories";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchRepositories = async (page: number, sort: string) => {
  const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};
  const response = await axios.get(GITHUB_API_URL, {
    headers,
    params: {
      q: "javascript",
      sort,
      order: "asc",
      page
    }
  });
  return response.data.items;
};
