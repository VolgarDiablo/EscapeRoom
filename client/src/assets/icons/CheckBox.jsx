import * as React from "react";

const CheckBox = ({ checked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect width="16" height="16" rx="4" fill="#F2890F" />
      {checked && (
        <path
          d="M4 8l2 2 5-5"
          stroke="#fff"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

export default CheckBox;
