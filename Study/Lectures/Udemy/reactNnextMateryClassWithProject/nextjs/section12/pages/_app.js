import "@/styles/globals.css";

// 모든 페이지에 적용될 레이아웃 설정 담당
// 모든 페이지 컴포넌트의 부모 컴포넌트 역할을 수행
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
