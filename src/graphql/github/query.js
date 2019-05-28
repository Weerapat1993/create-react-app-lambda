import axios from 'axios'

export const fetchGithubRepoQuery = async (_, { name }) => {
  const response = await axios({
    method: 'GET',
    responseType: 'json',
    url: `https://api.github.com/users/${name}/repos`,
  })
  return response.data;
}