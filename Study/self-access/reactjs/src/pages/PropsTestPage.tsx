import PropsTestChild from "../components/props/PropsTestChild.tsx";
import ComponentPropsParent from "../components/props/ComponentPropsParent.tsx";
import ComponentPropsChild from "../components/props/ComponentPropsChild.tsx";

const PropsTestPage = () => {
  const testObj = { id: 1, value: "test" };
  return (
    <>
      <PropsTestChild {...testObj} />
      <ComponentPropsParent>
        <ComponentPropsChild />
      </ComponentPropsParent>
    </>
  );
};

export default PropsTestPage;
