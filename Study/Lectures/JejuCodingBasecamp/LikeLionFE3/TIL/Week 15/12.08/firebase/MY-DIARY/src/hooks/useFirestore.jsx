import { appFireStore, timeStamp } from "../firebase/config";
import { useReducer } from "react";
import { addDoc, collection } from "firebase/firestore";

const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  //관리하는 값: state

  /* action.type에 따른 반환값 */
  // 케이스마다 리턴해야할 값을 바꿔줘야 함.기존데이터에 새로운 데이터만 추가되는 방식 사용불가
  // 데이터를 추가하는게 아니고 데이터 내 객체값이 계속 바뀌는 상태이므로 전개구문을 사용할 수 없음
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, error: null, sucess: false };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        error: null,
        success: true,
      };
    // action - {타입: 문서타입, 페이로드: 관리할 데이터}
    // payload - 우리가 관리할 값. 바꿔줄 값.
    case "error":
      return {
        isPending: false,
        document: null,
        error: action.payload,
        sucess: false,
      };
    default:
      return state;
  }
};

export const useFirestore = (transaction) => {
  // transaction: hook을 전달받을 떄 사용하는 hook
  const [response, dispatch] = useReducer(storeReducer, initState);
  const colRef = collection(appFireStore, transaction); // 컬렉션 주소 요청

  /* 문서추가하는 메서드 */
  const addDocument = async (doc) => {
    dispatch({ type: "isPending" }); // isPending - 파이어베이스와 통신하고 있는지에 대한 통신상태를 보여줌
    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: "addDoc", payload: docRef }); // 전달할 데이터 - payload: docRef
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }

    // const docRef = await addDoc(colRef, {
    //   name: "Tokyo",
    //   country: "Japan",
    // });
  };

  const deleteDocument = (id) => {
    // 컬렉션에 도달하는 것들은 각자 고유한 id를 가지고 있음
  };

  // 밖에서 사용할 수 있게 리턴
  return { addDocument, deleteDocument, response };
};
