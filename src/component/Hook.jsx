import { useState } from "react";
export const Hook = () => {
  const [state, setState] = useState(off);
  const off = () => {
    <div>
      <button
        style={{
          width: 250,
          height: 100,
          backgroundColor: "green",
          border: "55px solid black",
        }}
      >
        OFF
      </button>
    </div>;
  };
  const onn = () => {
    <div>
      <button
        style={{
          width: 250,
          height: 100,
          backgroundColor: "green",
          border: "55px solid black",
        }}
      >
        OFF
      </button>
    </div>;
  };
  
  return (
    <div>
      <state />
    </div>
  );
};
