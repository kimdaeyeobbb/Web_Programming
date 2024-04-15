import axios from "axios";

const fetchCountry = async (code) => {
  try {
    const response = await axios.get(
      `https://naras-api.vercel.app/code/${code}`,
    );
    return response.data;
  } catch (e) {
    return null;
  }
};

export default fetchCountry;
