import React from "react";

interface Props {
  children: React.ReactNode;
}

const ComponentPropsParent = ({ children }: Props) => {
  return (
    <div>
      <h1>Component Props</h1>
      {children}
      <h2>위는 children 위치</h2>
    </div>
  );
};
export default ComponentPropsParent;
