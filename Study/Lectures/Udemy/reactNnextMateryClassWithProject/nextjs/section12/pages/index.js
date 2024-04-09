import { useEffect } from "react";

export default function Home({ name }) {
  console.log("Home 컴포넌트에서 출력 !");
  useEffect(() => {
    console.log("Home 컴포넌트가 Mount 될 때에만 출력 !"); // 브라우저에서만 정상 출력
  }, []);
  return <div>{name}</div>;
}

export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수 -> 오직 서버에서만 실행이 됨

  console.log("getServerSideProps called");
  // 브라우저의 콘솔탭에서 나타나지 않음
  // 서버에서만 실행이 되므로 콘솔창 대신 서버의 로그에 등장
  return {
    props: {
      name: "Korea",
    },
  };
};
