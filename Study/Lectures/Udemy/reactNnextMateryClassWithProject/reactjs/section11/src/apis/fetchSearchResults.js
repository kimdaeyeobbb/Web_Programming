import axios from "axios";

export default async function fetchSearchResults(q) {
  try {
    const response = await axios.get(`
  https://naras-api.vercel.app/search?q=${q}
  `);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return [];
}
