import React from "react";

const Arrow = () => {
  return (
    <svg
      class="w-6 h-6 text-secondary "
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  );
};

export default Arrow;
