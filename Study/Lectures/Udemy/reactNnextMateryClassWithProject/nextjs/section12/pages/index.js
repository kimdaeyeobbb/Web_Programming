import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const code = "KOR";

  const router = useRouter();
  // 라우팅과 관련된 대부분의 정보와 메서드를 포함하는 객체
  const onClickButton = () => {
    // router.push("/search");
    // 현재 페이지의 경로 변경

    router.push({
      pathname: "/country/[code]",
      query: { code: code },
    });
    // 이와 같이 push 자리에 URL object를 넣어주면, 해당 URL로 이동시킬 수 있음 (문자열 대신 사용 가능)
  };
  return (
    <div>
      Home Page
      <div>
        <button onClick={onClickButton}>Search 페이지로 이동</button>
      </div>
      <div>
        <Link href={"/search"}>Search 페이지로 이동</Link>
      </div>
      <div>
        {/*URL object -> pathname, query로 구성*/}
        {/*pathname에는 페이지의 라우팅을 담당할 코드가 담긴 파일명이 들어가고, query에는 동적 경로의  URL 파라미터가 들어감 */}
        {/*이 pathname에 해당되는 경로로 이동시키는데, 그때 코드에 code에 query를 담아서 보내줌. 여기서는 country에 KOR을 담아서 보내줌*/}
        {/*이렇게 Link 컴포넌트를 이용할 떄에는 URL object를 이용해서 구조화 가능*/}
        <Link
          href={{
            pathname: "/country/[code]",
            query: { code: code },
          }}
        >
          {code} 페이지로 이동
        </Link>
      </div>
    </div>
  );
}
