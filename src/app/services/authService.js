import { httpClient } from "./httpClient";

async function login(params) {
  const { data } = await httpClient.post('/users/sessions', params)
  return data;
}

export const authService = {
  login
};