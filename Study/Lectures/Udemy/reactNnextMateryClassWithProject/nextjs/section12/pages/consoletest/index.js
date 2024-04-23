import { useEffect } from "react";

export default function Consoletest() {
  console.log("콘솔 메시지 출력 테스트 1"); // 서버 & 클라이언트 두 곳 모두에서 출력
  useEffect(() => {
    console.log("유스이펙트 - 아마도 클라이언트에서만 출력"); // 클라이언트 측에서만 출력
  }, []);
  return <div>Consoletest page</div>;
}

export const getServerSideProps = async () => {
  console.log("서버사이드프롭스 함수 실행"); // 서버측 콘솔에서만 출력
  return {
    props: {},
  };
};
