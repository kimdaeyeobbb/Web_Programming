import { useRouter } from "next/router";

export default function Country() {
  const router = useRouter();
  const { code } = router.query;

  return <div>Country Page - {code}</div>;
}

// [...code].js -> catch all route -> 모든 경로를 [...code].js파일이 잡아옴
// [[...code]].js -> optional catch all route -> code라는 url 경로를 옵셔널하게 만듦. 즉, code가 없어도 된다는 의미
