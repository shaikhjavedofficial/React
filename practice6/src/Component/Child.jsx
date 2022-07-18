import React from "react";

// here we have to receive and destructure the data
export const Child = ({ count }) => {
  return (
    <div>
      {/* to use javascript in html use {} */}
      <p>{count}</p>
    </div>
  );
};
