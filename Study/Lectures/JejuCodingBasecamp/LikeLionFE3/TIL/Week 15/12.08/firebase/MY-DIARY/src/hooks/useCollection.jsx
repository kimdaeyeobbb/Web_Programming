import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {
  const [documents, setDocuments] = useState(null); // 문서의 상태 관리, documents 수정 함수
  const [error, setError] = useState(null);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(collection(appFireStore, transaction), where(...myQuery));
    }
    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      (snapshot) => {
        //
        // snapshot내의 내용을 순환하면서 데이터를 뽑아내는 과정
        let result = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc.data()); // 훅을 사용할 때 doc의 뭔지 확인하기 위한 용도
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(result);
        setError(null); // 에러 유무 관리. 잘 실행이 되니까 null
      },
      (error) => {
        setError(error.message);
      }
    );
    return unsubscribe;
  }, [collection]); // 언제 실행될지는 배열을 넣어서 컨트롤

  return { documents, error };
};
