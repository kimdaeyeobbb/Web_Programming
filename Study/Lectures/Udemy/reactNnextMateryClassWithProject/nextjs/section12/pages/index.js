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

export const getStaticProps = async () => {
  // ServerSideProps와 달리 빌드타임에 딱 1번만 실행됨
  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴");
  // npm run dev -> 개발 모드로 실행시키면 수정결과가 바로 반영되게 하기 위해
  //  SSG건 SSR이건 페이지에 접속 요청을 보내면 처음부터 다시 페이지를 생성하도록 동작함

  // 개발모드에서는 SSG의 동작방식을 확인하기 힘들기 때문에 npm run build를 사용
  // collecting page data -확인 가능 -> 페이지를 구성하는 데이터를 불러오는 과정
  //  npm run build 이후 console의 내용이 잘 찍히면 정상적으로 데이터를 불러온 것이라 볼 수 있음

  return {
    props: {
      countries,
    },
  };
};
