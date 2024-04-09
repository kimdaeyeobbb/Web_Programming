import SubLayout from "@/components/SubLayout";

export default function Search() {
  return <div>Search Page</div>;
}

Search.Layout = SubLayout;
// JS 함수 (여기서는 Search)는 객체임 -> 컴포넌트를 만들기 위해 선언한 함수는 이렇게 객체로도 활용가능
// Search 페이지의 ㅣayout 프로퍼티를 추가하고 그 값을 SubLayout 컴포넌트로 설정
