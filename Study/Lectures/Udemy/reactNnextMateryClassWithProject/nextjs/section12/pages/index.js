import { useEffect } from "react";
import fetchCountries from "@/pages/api/fetchCountries";

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수 -> 오직 서버에서만 실행이 됨

  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
