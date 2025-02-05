import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
export default function ForwardRef() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={handleFocus}>입력칸 포커싱</button>
    </>
  );
}
