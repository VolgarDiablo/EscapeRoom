import * as React from "react";

const SeparatorBig = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={40}
    fill="none"
    {...props}
  >
    <path stroke="#fff" strokeOpacity={0.32} d="M1 0v40" opacity={0.54} />
  </svg>
);

export default SeparatorBig;
