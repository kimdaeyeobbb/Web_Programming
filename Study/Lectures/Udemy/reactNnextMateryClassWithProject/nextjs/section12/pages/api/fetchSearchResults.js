import axios from "axios";
const fetchSearchResults = async (q) => {
  try {
    const response = await axios.get(
      `https://naras-api.vercel.app/search?q=${q}`,
    );
    return response.data;
  } catch (error) {
    console.log("페치서치리설트에서 에러!! ");
    console.error(error);
  }
  return [];
};

export default fetchSearchResults;
