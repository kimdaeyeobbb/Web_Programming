import axios from "axios";

export async function fetchCountries(code) {
  try {
    const response = await axios.get(
      `https://naras-api.vercel.app/code/${code}`,
    );
    return response.data;
  } catch (e) {
    return null;
  }
}
