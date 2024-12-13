"use client";
import { useState } from "react";
export default function Counter({ user }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>there are {user.length} users</div>
      <button onClick={() => setCount((c) => c + 1)}> {count}</button>;
    </>
  );
}
