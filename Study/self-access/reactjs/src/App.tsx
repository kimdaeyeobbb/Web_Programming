import ReactHook from "./pages/ReactHook.tsx";
import JsxTest from "./pages/JsxTest.tsx";
import PropsTestPage from "./pages/PropsTestPage.tsx";
import EventTestPage from "./pages/EventTestPage.tsx";

function App() {
  return (
    <>
      <JsxTest />
      <ReactHook />
      <PropsTestPage />
      <EventTestPage />
    </>
  );
}

export default App;
