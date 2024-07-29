import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout";
import fetchCountry from "@/pages/api/fetchCountry";

export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;

  if (router.isFallback) {
    return <div>Loading ...</div>;
  }

  if (!country) {
    return <div>존재하지 않는 국가입니다</div>;
  }

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

// [...code].js -> catch all route -> 모든 경로를 [...code].js파일이 잡아옴
// [code].js -> optional catch all route -> code라는 url 경로를 옵셔널하게 만듦. 즉, code가 없어도 된다는 의미

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  // 페이지에 어떤 경로들이 필요한지 명시해서 반환
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    fallback: true, // path에 명시하지 않은 요청이 오는 경우 처리방법에 대한 옵션
    //false -> 없는 페이지에 대한 요청이라고 판단. 404 페이지 반환
    // true ->
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params; // url parameter

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: { country },
  };
};
