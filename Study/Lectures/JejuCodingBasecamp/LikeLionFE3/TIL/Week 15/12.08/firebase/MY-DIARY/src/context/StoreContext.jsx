import { useReducer } from "react";
import { appFireStore } from "../firebase/config";
import { StoreReducer } from "./StoreReducer";

// 우리가 받을 응답을 저장할 객체입니다. 객체이기 때문에 리듀서로 관리하겠습니다.
// 그리고 이전까지는 상태를 관리할 때 error나 isPending을 위한 useState을 따로 작성해왔지만 이번에는 useReducer로 한번에 관리해보겠습니다.

// document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환합니다.
// isPending: 통신중인지 아닌지 상태
// success : 요청에 대한 응답의 성공 유무
const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

// 우리가 데이터를 저장할 컬렉션을 인자로 합니다.
export const useFirestore = (transaction) => {
  // response에는 우리의 요청에 대한 firestore로 부터의 응답을 저장합니다.
  // 주로 데이터의 저장 성공 또는 요청한 문서 데이터일 것이며, 때문에 객체데이터를 다루는데 유용한 useReducer를 사용합니다.
  const [response, dispatch] = useReducer(StoreReducer, initState);

  // colRef : 우리가 만들 컬랙션의 참조입니다. 우리가 따로 컬렉션을 만들지는 않았지만,
  // 원하는 컬렉션의 참조를 요구하기만 해도 파이어스토어는 자동으로 해당 컬렉션을 생성해줍니다.
  const colRef = collection(appFireStore, transaction);

  // 컬렉션에 문서를 추가합니다.
  const addDocument = (doc) => {};

  // 컬렉션에서 문서를 제거합니다.
  const deleteDocument = (id) => {};

  return { addDocument, deleteDocument, response };
};
