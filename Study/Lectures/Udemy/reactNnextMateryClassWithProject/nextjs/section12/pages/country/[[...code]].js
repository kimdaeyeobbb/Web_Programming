import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout";
import fetchCountry from "@/pages/api/fetchCountry";

export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div>
      <div>commonName: {country.commonName}</div>
      <div>officialName: {country.officialName}</div>
    </div>
  );
}

// [...code].js -> catch all route -> 모든 경로를 [...code].js파일이 잡아옴
// [[...code]].js -> optional catch all route -> code라는 url 경로를 옵셔널하게 만듦. 즉, code가 없어도 된다는 의미

Country.Layout = SubLayout;

/* SSR 적용 */
export const getServerSideProps = async (context) => {
  const { code } = context.params; // url parameter

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: { country },
  };
};
