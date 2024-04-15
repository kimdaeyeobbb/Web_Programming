import axios from "axios";
const fetchSearchResults = async () => {
  try {
    const response = await axios.get(
      `https://naras-api.vercel.app/search?q=${q}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export default fetchSearchResults;
