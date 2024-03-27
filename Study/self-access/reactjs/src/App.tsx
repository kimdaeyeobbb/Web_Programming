import ReactHook from "./pages/ReactHook.tsx";
import JsxTest from "./pages/JsxTest.tsx";
import PropsTestPage from "./pages/PropsTestPage.tsx";
import EventTestPage from "./pages/EventTestPage.tsx";
import StatePage from "./pages/StatePage.tsx";
import PropsParentPage from "./pages/PropsParentPage.tsx";
import RefPage from "./pages/ref/RefPage.tsx";

function App() {
  return (
    <>
      <JsxTest />
      <ReactHook />
      <PropsTestPage />
      <EventTestPage />
      <StatePage />
      <PropsParentPage />
      <RefPage />
    </>
  );
}

export default App;
