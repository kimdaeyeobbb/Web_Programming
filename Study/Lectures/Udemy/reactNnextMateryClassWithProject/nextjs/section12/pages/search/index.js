import SubLayout from "@/components/SubLayout";
import fetchSearchResults from "@/pages/api/fetchSearchResults";

export default function Search({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

Search.Layout = SubLayout;
// JS 함수 (여기서는 Search)는 객체임 -> 컴포넌트를 만들기 위해 선언한 함수는 이렇게 객체로도 활용가능
// Search 페이지의 ㅣayout 프로퍼티를 추가하고 그 값을 SubLayout 컴포넌트로 설정

// SSR 적용
export const getServerSideProps = async (context) => {
  // 1. 검색 결과 API 호출
  // 2. props 리턴

  // console.log(context); // 현재 브라우저에서 받은 요청에 대한 정보들이 들어가 있음.

  // const q = context.query.q; // 쿼리 스트링
  const { q } = context.query; // 쿼리 스트링 (세련된 버전)
  console.log("query string: ", q);

  let countries = [];
  if (q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: { countries },
  };
};
