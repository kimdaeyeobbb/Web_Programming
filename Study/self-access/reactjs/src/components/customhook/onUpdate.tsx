// 업데이트 될때에만 사용하는 함수
import useUpdate from "../../hooks/useUpdate.ts";

const OnUpdate = () => {
  const onMount = () => {
    console.log("컴포넌트 마운트");
  };

  // 콜백 함수 등록
  useUpdate(onMount);

  return <>ㅁㅁㅁ</>;
};

export default OnUpdate;
