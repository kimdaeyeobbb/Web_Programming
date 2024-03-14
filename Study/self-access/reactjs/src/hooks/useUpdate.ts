import { useEffect, useRef } from "react";

export default function useUpdate(callback: () => void) {
  // 컴포넌트가 이미 마운트 되었는지 여부를 저장하는 ref객체
  const isMountRef = useRef(false);

  // 컴포넌트가 업데이트 될 때에만 onMount 함수 호출

  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }

    callback();
  });
}
