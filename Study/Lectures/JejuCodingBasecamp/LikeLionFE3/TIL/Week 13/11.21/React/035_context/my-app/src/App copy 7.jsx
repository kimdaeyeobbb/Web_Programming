import { useContext, createContext } from "react";

const UserInfo = createContext({
  name: "danny",
  id: "puppy",
  email: "puppy@gmail.com",
});

function One() {
  const { name, id, email } = useContext(UserInfo);
  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{email}</p>
    </div>
  );
}

export default function App() {
  return <div>App</div>;
}
