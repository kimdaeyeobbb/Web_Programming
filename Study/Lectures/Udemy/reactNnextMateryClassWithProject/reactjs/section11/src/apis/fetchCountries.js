import axios from "axios";

const fetchCountries = async () => {
  try {
    const response = await axios.get("https://naras-api.vercel.app/all");
    // await -> 비동기 함수가 종료될 때까지 기다려줌
    // 비동기 함수의 결과를 기다렸다가 response에 호출결과를 저장함

    return response.data;
  } catch (e) {
    return [];
  }
};

export default fetchCountries;
