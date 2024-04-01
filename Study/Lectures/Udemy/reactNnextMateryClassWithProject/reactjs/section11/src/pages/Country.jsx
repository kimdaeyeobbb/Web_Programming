import { useParams } from "react-router-dom";

const Country = () => {
  // 현재 URL 파라미터 값들을 객체 형태로 저장
  const params = useParams();

  console.log(params);
  return <>country</>;
};

export default Country;
