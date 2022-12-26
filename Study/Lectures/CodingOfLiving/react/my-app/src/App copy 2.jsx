import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";

export default function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {/* showTimer가 true일 경우에만 Timer를 보여줌 */}
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}
