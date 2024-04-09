import "@/styles/globals.css";
import Layout from "@/components/Layout";
import SubLayout from "@/components/SubLayout";

// 모든 페이지에 적용될 레이아웃 설정 담당
// 모든 페이지 컴포넌트의 부모 컴포넌트 역할을 수행
export default function App({ Component, pageProps }) {
  console.log(Component.Layout);
  // 해당 페이지에 대한 Layout을 설정해야만 출력결과가 있을 것임. 그렇지 않으면 undefined 출력

  const EmptyLayout = ({ children }) => {
    return <>{children}</>;
  };
  const SubLayout = Component.Layout || EmptyLayout;
  // index 페이지처럼 Layout이 설정되어 있지 않은 페이지는 undefined 출력 -> 이를 방지하기 위한 해결책
  return (
    // <Layout>
    //   <SubLayout>
    //     <Component {...pageProps} />
    //   </SubLayout>
    // </Layout>
    // 위와 아래는 같은 뜻 - 인자인 Component 위치에 Search가 들어오면 Component.Layout은 SubLayout이 됨
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}
