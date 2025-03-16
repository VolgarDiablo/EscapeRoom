import * as React from "react";

const Separator = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={20}
    fill="none"
    {...props}
  >
    <path stroke="#fff" strokeOpacity={0.5} d="M1 0v20" />
  </svg>
);

export default Separator;
