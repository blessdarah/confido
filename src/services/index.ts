import axios from "axios";

const baseUrl = "localhost:5173/api";

export const apiHandler = {
  get: async (url: string) => await axios.get(`${baseUrl}/${url}`),
  post: async (url: string, data: any) =>
    await axios.post(`${baseUrl}/${url}`, data),
};
